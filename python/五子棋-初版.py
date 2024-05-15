"""
这个脚本定义了三个主要的函数：`print_board`、`check_win` 和 `make_move`。
`play_game` 函数是游戏的主循环，它创建棋盘、管理玩家回合、检查获胜条件并打印游戏结果。
游戏使用命令行输入来获取玩家的坐标，并在每次玩家移动后检查是否有人获胜。
如果没有人获胜，游戏继续，直到棋盘被填满或者有人获胜。
"""

# 定义一个函数来打印棋盘
def print_board(board):
    """
    打印当前棋盘的状态。
    """
    for row in board:
        # 遍历棋盘的每一行
        print(' '.join(row))  # 使用join方法将每一行的字符串连接起来，并在字符之间添加空格

# 定义一个函数来检查是否有一方获胜
def check_win(board, player):
    """
    检查棋盘上是否有玩家获胜。
    """
    # 检查每一行、每一列和两条对角线
    for row in board:
        if all([cell == player for cell in row]):
            return True  # 如果某一行全部是玩家的棋子，返回True
    for col in range(len(board)):
        if all([board[row][col] == player for row in range(len(board))]):
            return True  # 如果某一列全部是玩家的棋子，返回True
    if all([board[i][i] == player for i in range(len(board))]):
        return True  # 如果主对角线全部是玩家的棋子，返回True
    if all([board[i][len(board)-1-i] == player for i in range(len(board))]):
        return True  # 如果副对角线全部是玩家的棋子，返回True
    return False  # 如果以上情况都不满足，返回False

# 定义一个函数来执行玩家的移动
def make_move(board, row, col, player):
    """
    在棋盘上执行玩家的移动。
    """
    board[row][col] = player  # 将棋盘上的指定位置标记为玩家的棋子

# 定义一个函数来开始游戏
def play_game():
    board = [['.' for _ in range(15)] for _ in range(15)]  # 创建一个15x15的棋盘
    current_player = 'X'  # 初始化当前玩家为X
    
    while True:
        # 打印当前棋盘的状态
        print_board(board)
        # 获取玩家的输入
        move = input(f"{current_player} 的回合，请输入你的坐标（例如：1 1）：")
        # 解析玩家的输入，将其转换为整数坐标
        row, col = map(int, move.split())
        # 在棋盘上执行玩家的移动
        make_move(board, row, col, current_player)
        
        # 检查玩家是否获胜
        if check_win(board, current_player):
            # 如果玩家获胜，打印获胜消息并退出游戏循环
            print(f"{current_player} 获胜！")
            break
        
        # 切换当前玩家
        current_player = 'O' if current_player == 'X' else 'X'

# 游戏入口点
if __name__ == "__main__":
    # 调用游戏函数开始游戏
    play_game()
