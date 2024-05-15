def calculate(expression):
    """
    计算数学表达式的值。
    支持加法、减法、乘法、除法和乘方。
    """
    try:
        # 使用栈来处理运算符和操作数
        numbers = []
        operators = []
        i = 0
        while i < len(expression):
            if expression[i].isdigit() or expression[i] == '.':
                j = i
                while j < len(expression) and (expression[j].isdigit() or expression[j] == '.'):
                    j += 1
                numbers.append(float(expression[i:j]))
                i = j - 1
            elif expression[i] in "+-*/^":
                while (operators and operators[-1] in "*/^" and expression[i] in "+-") or \
                      (operators and operators[-1] == '^' and expression[i] in "*/"):
                    pop_operator(numbers, operators)
                operators.append(expression[i])
            elif expression[i] == '(':
                operators.append(expression[i])
            elif expression[i] == ')':
                while operators[-1] != '(':
                    pop_operator(numbers, operators)
                operators.pop()  # 弹出左括号
            i += 1

        while operators:
            pop_operator(numbers, operators)

        return numbers[0]
    except Exception as e:
        print(f"计算错误：{e}")
        return None

def pop_operator(numbers, operators):
    """
    执行栈顶的运算符。
    """
    operator = operators.pop()
    right = numbers.pop()
    left = numbers.pop()
    if operator == '+':
        numbers.append(left + right)
    elif operator == '-':
        numbers.append(left - right)
    elif operator == '*':
        numbers.append(left * right)
    elif operator == '/':
        if right != 0:
            numbers.append(left / right)
        else:
            raise ZeroDivisionError("除数不能为0")
    elif operator == '^':
        numbers.append(left ** right)

def calculator():
    """
    计算器函数。
    用户可以输入一个包含数字和运算符的数学表达式。
    程序会计算并返回结果。
    支持的运算符包括：+、-、*、/、^。
    """
    # 用户输入表达式
    expression = input("请输入数学表达式（例如：3 + 4 * 2 / (1 - 5)^2）：")

    # 计算表达式
    result = calculate(expression)
    if result is not None:
        print(f"结果：{result}")
    else:
        print("无效的数学表达式！")

if __name__ == "__main__":
    calculator()  # 调用计算器函数
