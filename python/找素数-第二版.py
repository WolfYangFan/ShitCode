#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os
import math

# 判断一个数是否为素数的函数
def is_prime(num):
    # 小于等于1的数不是素数
    if num <= 1:
        return False
    # 2和3是素数
    if num <= 3:
        return True
    # 排除偶数
    if num % 2 == 0:
        return False
    # 只需要检查到数的平方根
    for i in range(3, int(math.sqrt(num)) + 1, 2):
        if num % i == 0:
            return False
    return True

# 将指定区间内的素数写入文件的函数
def write_primes_to_file(lower, upper):
    # 创建文件名
    output_filename = f"{lower}-{upper}_primes.txt"
    # 打开文件，如果文件不存在则创建
    with open(output_filename, 'w') as f:
        # 遍历指定区间内的所有数
        for num in range(lower, upper + 1):
            # 如果是素数，则写入文件
            if is_prime(num):
                f.write(str(num) + '\n')

# 主函数
def main():
    try:
        # 用户输入区间最小值和最大值
        lower = int(input("输入区间最小值: "))
        upper = int(input("输入区间最大值: "))
        # 检查输入的数值是否合理
        if lower > upper:
            print("最小值应该小于或等于最大值。")
            return
        # 写入素数到文件
        write_primes_to_file(lower, upper)
        print("素数已写入文件。")
    except ValueError:
        # 处理非整数输入的错误
        print("请输入有效的整数。")
    except Exception as e:
        # 处理其他可能的错误
        print(f"发生错误：{e}")

# 入口
if __name__ == "__main__":
    main()
