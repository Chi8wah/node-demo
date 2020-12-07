const http = require('http');
const url = require('url');

// 想获取url传过来的name和age
http.createServer((req,res) => {

  res.writeHead(200,{"Content-type" : "text/html; charset = 'utf-8'"});

  res.write('<head><meta charset="UTF-8"><title>Document</title></head>');

  if(req.url !== '/favicon.ico'){
    var userinfo = url.parse(req.url, true).query;
    console.log(`姓名: ${userinfo.name}, 年龄: ${userinfo.age}`);
  }

  res.end(); // 结束响应, 必需

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

