/*
8. fs.rmdir 删除目录
9. fs.unlink 删除文件
*/

const fs = require('fs');

// 不能删除非空目录，且不能删除文件
fs.rmdir('./test', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('rmdir success');
})

// fs.unlink('./test/index.html', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('unlink success');
// })