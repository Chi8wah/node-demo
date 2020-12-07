// 引入http模块，模块：把公共的功能抽离成文件
var http = require('http');

// 通过createServer创建web服务
/*
    request: 获取客户端传过来的信息
    response: 给客户端响应信息
*/
http.createServer(function (request, response) {

  // writeHead: 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // end: 给页面输出一句话并结束响应
  response.end('Hello World');
}).listen(8081);  // 监听8081端口

console.log('Server running at http://127.0.0.1:8081/');