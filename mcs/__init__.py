from nonebot import on_command
from nonebot.adapters.onebot.v11 import Message
from nonebot.params import CommandArg
from mcstatus import JavaServer
from mcstatus.status_response import JavaStatusResponse
import asyncio
import socket

__plugin_meta__ = PluginMetadata(
    name="MC 服务器查询",
    description="支持 SRV 记录的 Minecraft 服务器状态查询",
    usage="/mcs <地址>[:端口]",
    type="application",
    supported_adapters={"~onebot.v11"},
)

mc = on_command("mcs", aliases={"minecraft"}, priority=10)

async def resolve_srv(address: str) -> tuple[str, int]:
    """解析 SRV 记录并返回实际地址和端口"""
    try:
        _, _, resolved = socket.getaddrinfo(
            f"_minecraft._tcp.{address}", 
            None, 
            proto=socket.IPPROTO_TCP
        )
        return resolved[4][0], resolved[4][1]
    except:
        return address, 25565

@mc.handle()
async def handle_mc(args: Message = CommandArg()):
    raw_address = args.extract_plain_text().strip()
    if not raw_address:
        await mc.finish("请输入服务器地址！")

    try:
        # 自动处理SRV记录
        server = await asyncio.to_thread(JavaServer.lookup, raw_address)
        
        # 带超时的状态查询
        status = await asyncio.wait_for(server.async_status(), timeout=10)
    except asyncio.TimeoutError:
        await mc.finish("⏳ 服务器响应超时")
    except Exception as e:
        await mc.finish(f"❌ 查询失败: {str(e)}")
        return

    # 获取解析后的真实地址
    resolved_address = f"{server.host}:{server.port}"
    
    msg = [
        "🟢 Minecraft 服务器状态",
        f"📡 地址: {resolved_address}",
        f"🎮 版本: {status.version.name}",
        f"👥 玩家: {status.players.online}/{status.players.max}",
        f"📶 延迟: {status.latency:.1f}ms"
    ]

    if status.players.sample:
        players = "、".join([p.name for p in status.players.sample])
        msg.append(f"🎯 在线玩家: {players}")

    await mc.finish("\n".join(msg))
