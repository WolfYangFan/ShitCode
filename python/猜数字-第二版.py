import random

def guess_number():
    """
    改进的猜数字游戏函数。
    程序会生成一个1到100之间的随机数，用户有限定的次数来猜测这个数字。
    用户可以通过输入数字0、1、2来选择不同难度级别，难度越高，猜测次数越少。
    用户还可以选择获取提示，提示会告诉用户猜测的数字是太高还是太低。
    """

    levels = {
        0: {'name': '容易', 'attempts': 10},
        1: {'name': '中等', 'attempts': 7},
        2: {'name': '困难', 'attempts': 5}
    }

    # 用户选择难度
    level = int(input("选择难度（0：容易，1：中等，2：困难）："))
    while level not in levels:
        level = int(input("无效的难度选择，请重新选择（0：容易，1：中等，2：困难）："))

    # 根据难度设置猜测次数
    attempts = levels[level]['attempts']
    number = random.randint(1, 100)  # 生成一个1到100之间的随机数

    print(f"你选择了{levels[level]['name']}难度，你有{attempts}次机会来猜对数字。")

    while attempts > 0:
        guess = int(input("猜一个1到100之间的数字："))
        attempts -= 1  # 减少一次尝试次数

        if guess == number:
            print(f"恭喜你，你猜对了！数字就是{number}。")
            break
        elif guess < number:
            print("太小了！")
            if attempts > 0:
                hint = input("需要提示吗？（是/否）：").strip().lower()
                if hint == '是':
                    print("提示：你的下一次猜测应该更大。")
        else:
            print("太大了！")
            if attempts > 0:
                hint = input("需要提示吗？（是/否）：").strip().lower()
                if hint == '是':
                    print("提示：你的下一次猜测应该更小。")

        if attempts > 0:
            print(f"你还有{attempts}次机会。")
        else:
            print(f"机会用完了！游戏结束，正确答案是{number}。")

if __name__ == "__main__":
    guess_number()  # 调用改进的猜数字游戏函数
