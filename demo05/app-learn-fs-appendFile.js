/*
4. fs.appendFile 追加文件
*/

const fs = require('fs');

// 文件不存在则创建文件并写入
// fs.appendFile('./css/bass.css', 'body{color:red}', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('appendFile success');
// })

fs.appendFile('./css/bass.css', 'h2{color:red}', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('appendFile success');
})