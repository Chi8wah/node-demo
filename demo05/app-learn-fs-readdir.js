/*
6. fs.readdir 读取目录
*/

const fs = require('fs');

// 返回目录下的文件夹及文件
fs.readdir('./html', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

