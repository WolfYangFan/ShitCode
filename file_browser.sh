#!/bin/bash

# 检查是否使用 -all 参数
show_hidden=false
if [[ "$1" == "-a" ]]; then
    show_hidden=true
fi

# 定义一个函数来高亮显示文件
highlight_file() {
    local file_index=$1
    if $show_hidden; then
        file_list=$(ls -lA | awk 'NR>1 {print$9}')
    else
        file_list=$(ls -l | awk 'NR>1 {print$9}')
    fi
    local i=1
    local selected_file=$(echo "$file_list" | sed "${file_index}q;d")

    echo "文件列表:"

    # 使用awk打印文件列表，并高亮选中的文件
    echo "$file_list" | awk -v selected="$selected_file" -v sel_index="$i" '{
        if ($0 == selected) {
            printf "\033[7m%s\033[0m\n", $0
        } else {
            print $0
        }
        sel_index++
    }'
}

# 定义一个信号处理函数
handle_sigint() {
  echo "警告: 非正常退出, 可能对您的终端造成伤害!"
  echo "警告: 正在尝试退出..."
  sleep 0.3
  tput cnorm # 显示光标
  tput clear # 清屏
  exit 0
}

# 使用trap命令捕获SIGINT信号，并调用handle_sigint函数
trap handle_sigint SIGINT

# 初始化变量
current_index=1
max_index=$(ls -l | wc -l)

# 主循环
while true; do
    tput civis # 隐藏光标
    tput clear # 清屏

    echo "使用箭头键来选择文件"
    echo "按 Enter 键编辑或运行高亮项"
    echo "输入 qqq 以退出"
    echo "输入 nfn 创建新文件"
    echo "输入 ddy 删除文件"
    echo "---------------------"

    # 高亮当前选中的文件
    highlight_file $current_index

    # 读取键盘输入
    read -s -n 3 key

    # 根据输入的键进行处理
    case $key in
        $'\e[A') # 上
            ((current_index--))
            if [ $current_index -lt 1 ]; then
                current_index=1
            fi
            ;;
        $'\e[B') # 下
            ((current_index++))
            if [ $current_index -gt $max_index ]; then
                current_index=$max_index
            fi
            ;;
        'qqq') # Quit Quit Quit!
            echo "退出中..."
            tput cnorm # 显示光标
            tput clear # 清屏
            exit 0
            ;;
        'ddy') # Delete, Delete? Yes!
            selected_item=$(ls -lA | awk 'NR>1 {print$9}' | sed "${current_index}q;d")
            if [ -d "$selected_item" ]; then
                echo "无法删除目录: $selected_item"
            else
                rm "$selected_item"
                echo "文件 '$selected_item' 已删除."
            fi
            sleep 1
            max_index=$(ls -lA | wc -l)
            current_index=1

            ;;
        'nfn') # New File Now!
            tput cnorm # 显示光标
            read -p "请输入文件名: " file_name
            if [ -z "$file_name" ]; then
                echo "文件名不能为空"
            else
                touch "$file_name"
                echo "文件 '$file_name' 已创建."
                max_index=$(ls -l | wc -l)
                current_index=1
            fi
            ;;
        '') # 回车
            selected_file=$(ls -l | awk 'NR>1 {print$9}' | sed "${current_index}q;d")
            if [ -d "$selected_item" ]; then
                # 切换到目录
                cd "$selected_item" || exit
                max_index=$(ls -lA | wc -l)
                current_index=1
            elif [ -x "$selected_file" ]; then
                echo "执行文件: $selected_file"
                # 执行
                "./$selected_file"
                break
            else
                # 检查vim命令是否存在
                if [ -x "$(which vim)" ]; then
                    echo "文件不可执行: $selected_file, 将用 vim 编辑文件!"
                    sleep 1
                    # 使用vim打开文件
                    vim "$selected_file"
                else
                    # 检查nano命令是否存在
                    if [ -x "$(which nano)" ]; then
                        echo "文件不可执行: $selected_file, 将用 nano 编辑文件!"
                        sleep 1
                        # 使用nano打开文件
                        nano "$selected_file"
                    else
                        echo "文件不可执行: $selected_file, 且无可用编辑器!"
                        sleep 3
                    fi
                fi
            fi
            ;;
        *) # 其他键
            echo "未知的键: $key"
            sleep 1
            ;;
    esac
done
