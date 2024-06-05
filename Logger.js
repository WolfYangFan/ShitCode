// 抄袭于: https://segmentfault.com/a/1190000044781048
class Logger {
  static level = 'INFO'; // 默认日志输出级别

  static setLevel(newLevel) {
    this.level = newLevel; // 设置日志输出级别
  }

  static shouldLog(level) {
    // 是否应当输出的逻辑
    const levels = ['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'];
    return levels.indexOf(level) >= levels.indexOf(this.level);
  }

  static formatStack(stack) {
    if (!stack) return '';
    // 格式化错误堆栈的逻辑
    return stack.split('\n').map(line => `    at ${line}`).join('\n');
  }

  static log(level, message, error) {
    if (!this.shouldLog(level)) {
      return;
    }
    const timestamp = new Date().toISOString();
    const stack = error ? error.stack : '';
    var formattedMessage = `[${timestamp}] [${level}] ${message} ${stack}`;
    // 格式化错误堆栈
    if (error) {
      formattedMessage += `\n${this.formatStack(error.stack)}`;
    }
    
    switch (level) {
      case 'DEBUG':
        console.debug(formattedMessage);
        break;
      case 'INFO':
        console.info(formattedMessage);
        break;
      case 'WARN':
        console.warn(formattedMessage);
        break;
      case 'ERROR':
      case 'FATAL':
        console.error(formattedMessage);
        break;
      default:
        console.log(formattedMessage);
    }
  }

  static debug(message) {
    this.log('DEBUG', message);
  }

  static info(message) {
    this.log('INFO', message);
  }

  static warn(message) {
    this.log('WARN', message);
  }

  static error(message, error) {
    this.log('ERROR', message, error);
  }

  static fatal(message, error) {
    this.log('FATAL', message, error);
  }
}

// 使用示例
// Logger.info('Application is starting...');
// Logger.error('Failed to load user data', new Error('Network Error'));
