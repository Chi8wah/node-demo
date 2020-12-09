// md5加密 123456

// npm install 某包 --save 的 --save 作用为
// 在package.json的dependencies中加入该包, 
// 则执行 npm i 命令时会根据 dependencies 一键下载所需包
// 最新的 NodeJS 使用 npm 时会自动写入 dependencies 
// 但使用 cnpm 时不会，所以还是建议加上 --save
// 若 npm install 某包 --save-dev 则
// 在package.json的devDependencies中加入该包
// 指定版本安装 npm install md5@2.3.0
// 版本号前分为'^', '~' 和 '*'
// ^ 表示 npm i 下载该包时第一位版本号不变，后2位取最新
// ~ 表示前2位不变，最后一位取最新
// * 表示全部取最新
// 无符号则表示指定版本号
const md5 = require('md5');

console.log(md5('123456'));