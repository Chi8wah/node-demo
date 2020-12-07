const http = require('http');

http.createServer((req,res) => {

  console.log(req.url);

  // 状态码 200, 文件类型 html, 字符集 utf-8
  res.writeHead(200,{"Content-type" : "text/html; charset = 'utf-8'"});

  // 输出一段html代码
  res.write('<head><meta charset="UTF-8"><title>Document</title></head><body>你好, NodeJS</body>');

  res.end(); // 结束响应, 必需

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');