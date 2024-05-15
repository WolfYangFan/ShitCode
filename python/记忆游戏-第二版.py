import random
import time

def generate_sequence(length, difficulty):
    """
    根据难度生成一个随机数字序列。
    难度越高，数字范围越大。
    """
    if difficulty == "简单":
        return [random.randint(1, 20) for _ in range(length)]
    elif difficulty == "中等":
        return [random.randint(1, 50) for _ in range(length)]
    elif difficulty == "困难":
        return [random.randint(1, 100) for _ in range(length)]
    else:
        print("无效的难度选择。")
        return None

def display_sequence(sequence):
    """
    显示数字序列。
    """
    for number in sequence:
        print(number, end=' ')
    print()  # 换行

def play_memory_game(players, difficulty):
    length = 10  # 设置数字序列的长度
    sequence = generate_sequence(length, difficulty)
    display_sequence(sequence)

    # 玩家尝试记住数字序列
    print("请记住以下数字序列：")
    time.sleep(5)  # 给玩家5秒钟的时间来记住数字序列
    print("\n记忆时间结束！")

    # 玩家尝试输入记住的数字序列
    print("现在请尝试输入你记住的数字序列：")
    start_time = time.time()
    while True:
        guess = input().split()
        if guess == sequence:
            end_time = time.time()
            elapsed_time = end_time - start_time
            print(f"恭喜你，你答对了！你用了{int(elapsed_time)}秒。")
            break
        else:
            print("不正确，请再试一次。")

if __name__ == "__main__":
    # 选择难度
    difficulty = input("选择难度（简单/中等/困难）：").strip().lower()
    while difficulty not in ["简单", "中等", "困难"]:
        difficulty = input("无效的难度选择，请重新选择（简单/中等/困难）：").strip().lower()

    # 选择玩家数量
    players = int(input("选择玩家数量（1-4）："))
    while players < 1 or players > 4:
        players = int(input("无效的玩家数量，请重新选择（1-4）："))

    # 初始化游戏
    play_memory_game(players, difficulty)
