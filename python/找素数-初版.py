#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os;


# 输出指定范围内的素数
# 用户输入数据
lower = int(input("输入区间最小值: "))
upper = int(input("输入区间最大值: "))

for num in range(lower,upper + 1):
    # 素数大于 1
    if num > 1:
        for i in range(2,num):
            if (num % i) == 0:
                break
        else:
            print(num);
            var = str(num) + str("\n");
            fname = str(lower) + str("-") + str(upper) + str("num.txt"); # 文件名
            #os.unlink(fname); #删除原来的文件
            with open(fname, 'a+') as f:     # 打开   如果文件不存在，创建该文件。
                    f.write(var)  # 把变量var写入 这里var必须是str格式

os.system('pause')
