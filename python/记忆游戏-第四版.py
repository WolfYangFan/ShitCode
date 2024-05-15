import random
import time

def generate_sequence(length, difficulty):
    """
    根据难度生成一个随机数字序列。

    参数:
    length (int): 生成的数字序列的长度。
    difficulty (int): 游戏难度级别，决定数字范围和序列长度。

    返回值:
    list: 一个包含随机数字的列表。

    功能:
    根据给定的长度和难度级别，生成一个随机数字序列。
    难度级别越高，生成的数字范围越大，序列长度也越长。

    如果难度级别为0（简单），生成的数字范围为1到20，序列长度为length。
    如果难度级别为1（中等），生成的数字范围为1到50，序列长度为length。
    如果难度级别为2（困难），生成的数字范围为1到100，序列长度为length。
    如果输入的难度级别无效，函数将返回 None 并打印错误消息。
    """
    # 根据难度级别选择数字范围
    if difficulty == 0:
        num_range = (1, 20)
    elif difficulty == 1:
        num_range = (1, 50)
    elif difficulty == 2:
        num_range = (1, 100)
    else:
        print("无效的难度选择。")
        return None

    # 使用列表推导式生成随机数字序列
    return [random.randint(num_range[0], num_range[1]) for _ in range(length)]

def display_sequence(sequence):
    """
    显示数字序列。
    """
    for number in sequence:
        print(number, end=' ')
    print()  # 换行

def play_memory_game(players, difficulty):
    sequence_length = 10  # 初始序列长度为10
    sequence = generate_sequence(sequence_length, difficulty)
    display_sequence(sequence)

    # 设置记忆时间长度
    if difficulty == 0:
        memory_time = 3
    elif difficulty == 1:
        memory_time = 5
    elif difficulty == 2:
        memory_time = 7
    else:
        print("无效的难度选择。")
        return None

    # 玩家尝试记住数字序列
    print(f"请记住以下数字序列，你有{memory_time}秒钟的时间：")
    time.sleep(memory_time)  # 给玩家记忆时间来记住数字序列
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
    difficulty = int(input("选择难度（0：简单，1：中等，2：困难）："))
    while difficulty not in [0, 1, 2]:
        difficulty = int(input("无效的难度选择，请重新选择（0：简单，1：中等，2：困难）："))

    # 选择玩家数量
    players = int(input("选择玩家数量（1-4）："))
    while players < 1 or players > 4:
        players = int(input("无效的玩家数量，请重新选择（1-4）："))

    # 初始化游戏
    play_memory_game(players, difficulty)
