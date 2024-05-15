import random
import time

"""
更新内容：加入了人机作战
"""

# 定义棋盘
def create_board(size):
    return [['.' for _ in range(size)] for _ in range(size)]

# 打印棋盘
def print_board(board):
    for row in board:
        print(' '.join(row))

# 检查是否获胜
def check_win(board, player):
    for row in board:
        if all([cell == player for cell in row]):
            return True
    for col in range(len(board)):
        if all([board[row][col] == player for row in range(len(board))]):
            return True
    if all([board[i][i] == player for i in range(len(board))]):
        return True
    if all([board[i][len(board)-1-i] == player for i in range(len(board))]):
        return True
    return False

# 人类玩家下棋
def human_move(board, player):
    while True:
        try:
            move = input(f"{player} 的回合，请输入你的坐标（例如：1 1）：")
            row, col = map(int, move.split())
            if board[row][col] == '.':
                board[row][col] = player
                return board
            else:
                print("该位置已被占用，请重新选择。")
        except ValueError:
            print("坐标输入错误，请输入正确的坐标。")

# 电脑玩家下棋
def computer_move(board, player):
    for row in range(len(board)):
        for col in range(len(board)):
            if board[row][col] == '.':
                board[row][col] = player
                return board

# 游戏主循环
def play_game(board_size):
    board = create_board(board_size)
    print_board(board)
    player = 'X'
    moves = 0
    start_time = time.time()

    while True:
        if player == 'X':
            board = human_move(board, 'X')
        else:
            board = computer_move(board, 'O')
        moves += 1
        print_board(board)
        if check_win(board, 'X') or check_win(board, 'O'):
            end_time = time.time()
            print(f"玩家 {player} 获胜！")
            print(f"总步数：{moves}")
            print(f"游戏用时：{end_time - start_time:.2f} 秒")
            break
        player = 'O' if player == 'X' else 'X'

# 游戏入口
if __name__ == "__main__":
    board_size = 15  # 棋盘大小，可以根据需要调整
    play_game(board_size)
