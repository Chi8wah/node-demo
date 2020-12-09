/*
7. fs.rename 重命名 (1. 重命名文件 2. 移动文件)
*/

const fs = require('fs');

// oldPath
// newPath
// callback
// fs.rename('./css/aaa.css', './css/index.css', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('rename success');
// })

fs.rename('./css/index.css', './html/index.css', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('rename success');
})
