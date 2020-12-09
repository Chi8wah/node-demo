/*
2. fs.mkdir 创建目录
*/

const fs = require('fs');

// path 目录
// mode 目录权限(读写权限), 默认777
// callback 回调函数

fs.mkdir('./css', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('mkdir success');
})