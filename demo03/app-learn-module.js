const http = require('http');
const tools = require('./module/tools.js');
console.log(tools);

http.createServer((req,res) => {

  console.log(req.url);

  res.writeHead(200,{"Content-type" : "text/html; charset = 'utf-8'"});

  res.write('<head><meta charset="UTF-8"><title>Document</title></head>');
  var api = tools.formatApi('api/focus');
  res.write(api);
  res.end(); // 结束响应, 必需

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');