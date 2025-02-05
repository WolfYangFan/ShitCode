import re
import subprocess
from nonebot import on_command
from nonebot.adapters.onebot.v11 import Message
from nonebot.params import CommandArg
from nonebot.rule import to_me

# 创建命令处理器
nexttrace_cmd = on_command("nexttrace", aliases={"nt"}, priority=10)

def is_valid_target(target: str) -> bool:
    """验证目标地址有效性（支持 IPv4/IPv6/域名）"""
    # IPv4 校验
    ipv4_pattern = r"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
    
    # IPv6 校验（支持缩写格式）
    ipv6_pattern = (
        r"^(?:(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}"
        r"|(?=(?:[A-F0-9]{0,4}:){0,7}[A-F0-9]{0,4}$)"
        r"(([0-9A-F]{1,4}:){1,7}|:)((:[0-9A-F]{1,4}){1,7}|:))$",
        re.IGNORECASE
    )
    
    # 域名校验（支持国际化域名）
    domain_pattern = (
        r"^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+"
        r"[a-zA-Z]{2,63}$"
    )

    return any([
        re.fullmatch(ipv4_pattern, target),
        re.fullmatch(ipv6_pattern[0], target, ipv6_pattern[1]),
        re.fullmatch(domain_pattern, target, re.IGNORECASE)
    ])

@nexttrace_cmd.handle()
async def handle_nexttrace(args: Message = CommandArg()):
    target = args.extract_plain_text().strip()
    
    # 输入校验
    if not target:
        await nexttrace_cmd.finish("请输入追踪目标，格式为：nexttrace <IP/域名>")
        
    if not is_valid_target(target):
        await nexttrace_cmd.finish("无效的目标地址，请提供有效的 IPv4/IPv6 地址或域名")

    try:
        # 执行 nexttrace 命令（自动识别 IPv4/IPv6）
        result = subprocess.run(
            ["nexttrace", target],
            capture_output=True,
            text=True,
            timeout=30,  # 设置超时时间
            check=True
        )
        
        # 匹配标准地图链接格式
        map_url = re.search(
            r"https://assets\.nxtrace\.org/tracemap/[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}\.html",
            result.stdout
        )

        if map_url:
            await nexttrace_cmd.finish(f"追踪地图：{map_url.group()}")
        else:
            await nexttrace_cmd.finish("未找到追踪地图，可能是目标不可达或服务暂时不可用")

    except subprocess.TimeoutExpired:
        await nexttrace_cmd.finish("追踪请求超时，请稍后再试")
    except subprocess.CalledProcessError as e:
        error_msg = f"追踪失败：{e.stderr.strip()}" if e.stderr else "追踪过程发生未知错误"
        await nexttrace_cmd.finish(error_msg)
    except FinishedException:
        break
    except Exception as e:
        await nexttrace_cmd.finish(f"系统错误：{str(e)}")
