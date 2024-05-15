import random  # 导入random模块，用于生成随机选择

def rock_paper_scissors():
    """
    石头剪刀布游戏的函数。
    程序会让用户输入他们的选择，然后与电脑的随机选择进行比较。
    根据游戏规则决定胜负，并显示结果。
    """
    choices = ["石头", "剪刀", "布"]  # 可用的选择列表
    while True:  # 开始一个无限循环，直到用户选择退出
        user_choice = input("请输入你的选择（石头/剪刀/布）或'退出'：")  # 用户输入他们的选择
        if user_choice == "退出":  # 如果用户选择退出
            break  # 退出循环
        if user_choice not in choices:  # 如果用户输入无效
            print("无效输入，请重新输入！")  # 提示用户重新输入
            continue  # 继续下一次循环
        computer_choice = random.choice(choices)  # 电脑生成一个随机选择
        print(f"你的选择：{user_choice}, 电脑的选择：{computer_choice}")  # 显示用户和电脑的选择
        # 根据游戏规则判断胜负
        if user_choice == computer_choice:  # 如果用户和电脑选择相同
            print("平局！")  # 显示平局消息
        elif (user_choice == "石头" and computer_choice == "剪刀") or \
             (user_choice == "剪刀" and computer_choice == "布") or \
             (user_choice == "布" and computer_choice == "石头"):  # 如果用户获胜
            print("你赢了！")  # 显示用户胜利消息
        else:  # 如果电脑获胜
            print("你输了！")  # 显示用户失败消息

if __name__ == "__main__":
    rock_paper_scissors()  # 调用石头剪刀布游戏的函数
