import json
from pathlib import Path
from typing import Set, Optional

from nonebot import get_driver, on_request, on_notice, on_command
from nonebot.adapters.onebot.v11 import (
    Bot,
    GroupDecreaseNoticeEvent,
    GroupRequestEvent,
    MessageEvent,
)
from nonebot.params import CommandArg
from nonebot.rule import to_me

# 配置文件路径
BANLIST_PATH = Path("data/group_banlist.json")
BANLIST_PATH.parent.mkdir(parents=True, exist_ok=True)


def load_banlist() -> Set[int]:
    """加载黑名单列表"""
    try:
        if BANLIST_PATH.exists():
            return set(json.loads(BANLIST_PATH.read_text(encoding="utf-8")))
    except Exception:
        pass
    return set()


def save_banlist(banlist: Set[int]):
    """保存黑名单列表"""
    BANLIST_PATH.write_text(
        json.dumps(sorted(banlist), ensure_ascii=False, indent=2), encoding="utf-8"
    )


# 黑名单管理命令
banlist_cmd = on_command("banlist", aliases={"黑名单管理"}, rule=to_me(), priority=5, block=True)

@banlist_cmd.handle()
async def handle_banlist(bot: Bot, event: MessageEvent, args: str = CommandArg()):
    """黑名单管理入口"""
    if str(event.user_id) not in get_driver().config.superusers:
        await banlist_cmd.finish("权限不足")

    args = args.extract_plain_text().strip().split()
    if not args:
        await banlist_cmd.finish(
            "⚠️ 您的指令没有添加参数！\n"
            "- add <群号> - 添加黑名单\n"
            "- remove <群号> - 移除黑名单\n"
            "- list - 查看列表\n"
            "- check <群号> - 检查状态"
        )

    subcmd, *rest = args
    handler = {
        "add": handle_add,
        "remove": handle_remove,
        "list": handle_list,
        "check": handle_check,
    }.get(subcmd.lower())
    await handler(bot, event, rest) if handler else await show_help()


async def show_help():
    """显示帮助信息"""
    await banlist_cmd.finish("无效命令，请输入 /banlist 查看帮助")


async def handle_add(bot: Bot, event: MessageEvent, args: list):
    """处理添加命令"""
    if not args:
        await banlist_cmd.finish("缺少必要参数")

    try:
        group_id = int(args[0])
        banlist = load_banlist()
        if group_id in banlist:
            await banlist_cmd.finish(f"群 {group_id} 已在黑名单中")
        
        banlist.add(group_id)
        save_banlist(banlist)
        await send_private(bot, event.user_id, f"✅ 已添加群 {group_id} 到黑名单")
    except ValueError:
        await banlist_cmd.finish("群号必须为数字")


async def handle_remove(bot: Bot, event: MessageEvent, args: list):
    """处理移除命令"""
    if not args:
        await banlist_cmd.finish("缺少必要参数")

    try:
        group_id = int(args[0])
        banlist = load_banlist()
        if group_id not in banlist:
            await banlist_cmd.finish(f"群 {group_id} 不在黑名单中")
        
        banlist.remove(group_id)
        save_banlist(banlist)
        await send_private(bot, event.user_id, f"❎ 已从黑名单移除群 {group_id}")
    except ValueError:
        await banlist_cmd.finish("群号必须为数字")


async def handle_list(bot: Bot, event: MessageEvent, _: list):
    """处理列表命令"""
    banlist = load_banlist()
    if not banlist:
        await banlist_cmd.finish("当前黑名单为空")

    groups = "\n".join(f"- {gid}" for gid in sorted(banlist))
    await send_private(bot, event.user_id, f"黑名单列表（共 {len(banlist)} 个）：\n{groups}")


async def handle_check(bot: Bot, event: MessageEvent, args: list):
    """处理检查命令"""
    if not args:
        await banlist_cmd.finish("缺少必要参数")

    try:
        group_id = int(args[0])
        banlist = load_banlist()
        status = "✅ 已在黑名单中" if group_id in banlist else "❎ 未在黑名单中"
        await send_private(bot, event.user_id, f"群 {group_id} 状态：{status}")
    except ValueError:
        await banlist_cmd.finish("群号必须为数字")


async def send_private(bot: Bot, user_id: int, message: str):
    """发送私聊消息"""
    await bot.send_private_msg(user_id=user_id, message=message)


# 退群事件处理
group_decrease = on_notice(priority=1, block=False)

@group_decrease.handle()
async def handle_group_decrease(bot: Bot, event: GroupDecreaseNoticeEvent):
    if event.user_id != event.self_id:
        return

    banlist = load_banlist()
    superusers = get_driver().config.superusers

    if event.sub_type == "kick":
        banlist.add(event.group_id)
        save_banlist(banlist)
        msg = f"🚫 机器人被踢出群 {event.group_id}"
    else:
        msg = f"⚠️ 机器人主动退出群 {event.group_id}，操作者：{event.operator_id}"

    for user_id in superusers:
        await send_private(bot, int(user_id), msg)

# 加群请求处理
group_request = on_request(priority=1, block=False)

@group_request.handle()
async def handle_group_request(bot: Bot, event: GroupRequestEvent):
    if event.sub_type != "invite":
        return

    banlist = load_banlist()
    superusers = get_driver().config.superusers

    if event.group_id in banlist:
        await bot.set_group_add_request(
            flag=event.flag,
            sub_type=event.sub_type,
            approve=False,
            reason="该群已被列入黑名单"
        )
        report_msg = f"⛔ 已拒绝黑名单群 {event.group_id} 的加群邀请"
    else:
        report_msg = f"📩 收到新加群邀请\n群号：{event.group_id}\n邀请者：{event.user_id}"

    for user_id in superusers:
        await send_private(bot, int(user_id), report_msg)
