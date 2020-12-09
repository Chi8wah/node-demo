/*
3. fs.writeFile 创建写入文件
*/

const fs = require('fs');

// filename 文件名
// data 内容(String | Buffer)
// options 可不写, option数组对象, 包括
//          * `encoding` (String) 编码, 默认'utf8'
//          * `mode` (Number) 文件读写权限, 默认0o666
//          * `flag` (String) 默认值'w'
// callback 回调函数

// fs.writeFile('./html/index.html', 'helloworld', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('writeFile success');
// })

// fs.writeFile('./html/index.html', 'helloworld', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('writeFile success');
// })

// 若文件已存在则覆盖其
fs.writeFile('./html/index.html', 'hello???', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('writeFile success');
})