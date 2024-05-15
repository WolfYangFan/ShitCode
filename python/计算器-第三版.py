def calculate(expression):
    """
    计算数学表达式的值。
    支持加法、减法、乘法、除法和乘方。
    """
    try:
        # 使用栈来处理运算符和操作数
        numbers = []  # 用于存储操作数（即数字）的列表
        operators = []  # 用于存储运算符的列表
        i = 0  # 初始化索引，用于遍历表达式

        # 遍历表达式中的每个字符
        while i < len(expression):
            # 如果当前字符是数字或小数点，则找到数字的结束位置
            if expression[i].isdigit() or expression[i] == '.':
                j = i
                while j < len(expression) and (expression[j].isdigit() or expression[j] == '.'):
                    j += 1
                numbers.append(float(expression[i:j]))  # 将数字压入数字栈
                i = j - 1  # 更新索引，跳过已处理的数字部分
            elif expression[i] in "+-*/^":  # 如果当前字符是运算符
                while (operators and operators[-1] in "*/^" and expression[i] in "+-") or \
                      (operators and operators[-1] == '^' and expression[i] in "*/"):
                    pop_operator(numbers, operators)  # 执行栈顶的运算符
                operators.append(expression[i])  # 将运算符压入运算符栈
            elif expression[i] == '(':  # 如果当前字符是左括号
                operators.append(expression[i])  # 将左括号压入运算符栈
            elif expression[i] == ')':  # 如果当前字符是右括号
                while operators[-1] != '(':  # 执行直到遇到左括号
                    pop_operator(numbers, operators)  # 执行栈顶的运算符
                operators.pop()  # 弹出左括号
            i += 1  # 更新索引，继续遍历表达式

        # 执行剩余的运算符
        while operators:
            pop_operator(numbers, operators)

        # 返回栈顶的操作数，即最终结果
        return numbers[0]

    except Exception as e:
        # 捕获并打印任何计算错误
        print(f"计算错误：{e}")
        return None

def pop_operator(numbers, operators):
    """
    执行栈顶的运算符。
    """
    operator = operators.pop()  # 弹出栈顶的运算符
    right = numbers.pop()  # 弹出栈顶的操作数（右操作数）
    left = numbers.pop()  # 弹出栈顶的操作数（左操作数）
    if operator == '+':
        numbers.append(left + right)  # 压入新的操作数（左操作数 + 右操作数）
    elif operator == '-':
        numbers.append(left - right)  # 压入新的操作数（左操作数 - 右操作数）
    elif operator == '*':
        numbers.append(left * right)  # 压入新的操作数（左操作数 * 右操作数）
    elif operator == '/':
        if right != 0:  # 检查除数是否为0
            numbers.append(left / right)  # 压入新的操作数（左操作数 / 右操作数）
        else:
            raise ZeroDivisionError("除数不能为0")  # 抛出除数为0的错误
    elif operator == '^':
