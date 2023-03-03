var express = require('express') 
 
// 创建快速应用程序实例
var app = express() 
 
// 快速路线
app.get('/', function (req, res) { 
   res.send('This is a basic Example for Express.js by nhooo') 
 }) 
 
// 启动服务器
var server = app.listen(80)
