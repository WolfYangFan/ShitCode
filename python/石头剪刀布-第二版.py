import random

def rock_paper_scissors():
    """
    改进的石头剪刀布游戏函数。
    用户通过输入数字0、1、2来选择石头、剪刀或布。
    程序会随机生成电脑的选择，并显示用户和电脑的选择以及比赛结果。
    """

    choices = {
        0: '石头',
        1: '剪刀',
        2: '布'
    }

    while True:
        # 用户选择
        user_choice = int(input("选择动作（0：石头，1：剪刀，2：布，3：退出）："))
        if user_choice == 3:
            print("游戏结束。")
            break
        if user_choice not in choices:
            print("无效输入，请重新输入！")
            continue

        # 电脑选择
        computer_choice = random.choice(list(choices.values()))

        print(f"你的选择：{choices[user_choice]}, 电脑的选择：{computer_choice}")

        # 判断胜负
        if choices[user_choice] == computer_choice:
            print("平局！")
        elif (choices[user_choice] == '石头' and computer_choice == '剪刀') or \
             (choices[user_choice] == '剪刀' and computer_choice == '布') or \
             (choices[user_choice] == '布' and computer_choice == '石头'):
            print("你赢了！")
        else:
            print("你输了！")

if __name__ == "__main__":
    rock_paper_scissors()  # 调用改进的石头剪刀布游戏函数
