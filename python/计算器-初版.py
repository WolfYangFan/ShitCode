def calculator():
    """
    简单的计算器函数。
    程序会提示用户输入两个数字和一个运算符（+、-、*、/）。
    然后根据用户输入的运算符执行相应的运算，并显示结果。
    """
    while True:  # 开始一个无限循环，直到用户输入有效的运算
        try:
            num1 = float(input("请输入第一个数字："))  # 用户输入第一个数字
            operator = input("请输入运算符（+、-、*、/）：")  # 用户输入运算符
            num2 = float(input("请输入第二个数字："))  # 用户输入第二个数字

            # 根据用户输入的运算符执行相应的运算
            if operator == "+":
                result = num1 + num2
            elif operator == "-":
                result = num1 - num2
            elif operator == "*":
                result = num1 * num2
            elif operator == "/":
                # 当除数为0时，抛出异常
                if num2 == 0:
                    print("除数不能为0！")
                    continue
                result = num1 / num2
            else:
                print("无效的运算符！")  # 如果运算符无效，提示用户
                continue  # 继续下一次循环

            print(f"{num1} {operator} {num2} = {result}")  # 显示运算结果
            break  # 退出循环
        except ValueError:  # 捕获非数字输入的异常
            print("请输入有效的数字！")  # 提示用户输入有效的数字

if __name__ == "__main__":
    calculator()  # 调用计算器函数
