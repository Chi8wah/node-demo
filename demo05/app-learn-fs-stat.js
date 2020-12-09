/*
1. fs.stat 检测是文件还是目录
*/

const fs = require('fs');

// fs.stat('./html', (err,data) => {
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(`是文件${data.isFile()}`);
//     console.log(`是目录${data.isDirectory()}`);
// });
// 是文件false
// 是目录true

fs.stat('./package.json', (err,data) => {
    if(err){
        console.log(err);
        return;
    }

    console.log(`是文件${data.isFile()}`);
    console.log(`是目录${data.isDirectory()}`);
});
是文件true
是目录false