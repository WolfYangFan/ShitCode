import random
import time

def crazy_racing():
    """
    疯狂赛车游戏的函数。
    程序模拟一个简单的赛车游戏，其中每个玩家（玩家1到玩家4）每轮都会随机前进1到3步。
    第一个到达终点（30步）的玩家赢得比赛。
    """
    players = ["玩家1", "玩家2", "玩家3", "玩家4"]  # 玩家列表
    finish_line = 30  # 终点线，即30步

    while True:  # 开始一个无限循环，直到有玩家到达终点
        time.sleep(1)  # 每轮之间暂停1秒，增加游戏的真实感
        for player in players:  # 遍历每个玩家
            move = random.randint(1, 3)  # 每个玩家随机前进1到3步
            print(f"{player}前进了{move}步。")  # 显示玩家的移动
            if move >= finish_line:  # 如果玩家到达或超过终点
                print(f"{player}赢得了比赛！")  # 显示获胜玩家
                return  # 退出函数

if __name__ == "__main__":
    crazy_racing()  # 调用疯狂赛车游戏的函数
