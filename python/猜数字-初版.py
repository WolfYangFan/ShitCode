import random  # 导入random模块，用于生成随机数

def guess_number():
    """
    猜数字游戏的函数。
    程序会生成一个1到10之间的随机数，用户有多次机会猜测这个数字。
    直到用户猜对为止，程序会显示用户猜测的次数。
    """
    number = random.randint(1, 10)  # 生成一个1到10之间的随机数
    attempts = 0  # 初始化尝试次数为0
    while True:  # 开始一个无限循环，直到用户猜对数字
        guess = int(input("猜一个1到10之间的数字："))  # 用户输入猜测的数字
        attempts += 1  # 尝试次数加1
        if guess == number:  # 如果用户猜对了
            print(f"恭喜你，你猜对了！你用了{attempts}次尝试。")  # 显示成功消息和尝试次数
            break  # 退出循环
        elif guess < number:  # 如果用户猜的数字太小
            print("太小了！")  # 提示用户数字太小
        else:  # 如果用户猜的数字太大
            print("太大了！")  # 提示用户数字太大

if __name__ == "__main__":
    guess_number()  # 调用猜数字游戏的函数
