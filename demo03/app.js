var db = require('db'); // Error: Cannot find module 'db'
// 因为NodeJS默认会找node_modules对应模块里的index.js

//对db文件夹执行 npm init --yes 后生成了 package.json, require成功
//NodeJS 实际上找的是 package.json 中的 main 属性内的文件作为模块入口从而引入