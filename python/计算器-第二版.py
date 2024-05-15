def calculator():
    """
    改进的计算器函数。
    用户通过输入数字0、1、2、3来选择加、减、乘、除运算。
    程序会执行相应的运算，并显示结果。
    """

    operators = {
        0: '+',
        1: '-',
        2: '*',
        3: '/'
    }

    while True:
        try:
            num1 = float(input("请输入第一个数字："))
            # 用户选择运算符
            operator = int(input("选择运算符（0：加，1：减，2：乘，3：除）："))
            if operator not in operators:
                print("无效的运算符！")
                continue
            num2 = float(input("请输入第二个数字："))

            # 执行运算
            if operators[operator] == '+':
                result = num1 + num2
            elif operators[operator] == '-':
                result = num1 - num2
            elif operators[operator] == '*':
                result = num1 * num2
            elif operators[operator] == '/':
                if num2 == 0:
                    print("除数不能为0！")
                    continue
                result = num1 / num2

            print(f"{num1} {operators[operator]} {num2} = {result}")
            break
        except ValueError:
            print("请输入有效的数字！")

if __name__ == "__main__":
    calculator()  # 调用改进的计算器函数
