import random
import time

def memory_game():
    """
    记忆游戏函数。
    程序会显示一组随机数字，然后用户需要在规定时间内记住这些数字。
    时间结束后，用户需要按顺序输入这些数字，程序会检查用户的记忆是否正确。
    """

    numbers = [random.randint(1, 100) for _ in range(5)]  # 生成一个包含5个随机数字的列表

    print("请记住以下数字：")  # 提示用户记住数字
    for number in numbers:  # 打印每个数字
        print(number, end=" ")
    time.sleep(3)  # 等待3秒钟，给用户时间记忆数字
    print("\n时间到！请按顺序输入这些数字。")  # 提示用户输入数字

    for number in numbers:  # 遍历每个数字
        guess = int(input())  # 用户输入数字
        if guess == number:  # 如果用户输入正确
            print("正确！")  # 提示用户输入正确
        else:  # 如果用户输入错误
            print("错误！游戏结束。")  # 提示用户输入错误，游戏结束
            return  # 退出函数

    print("恭喜你完成了记忆游戏！")  # 如果用户全部输入正确，提示用户完成游戏

if __name__ == "__main__":
    memory_game()  # 调用记忆游戏函数
