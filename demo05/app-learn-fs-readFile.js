/*
5. fs.readFile 读取文件
*/

const fs = require('fs');

// 
fs.readFile('./html/index.html', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.toString()); // 原始数据为 Buffer 类型，需转化为 String 类型
})

