const fs = require('fs');
var path = './wwwroot';
var dirArr = [];

// 错误的写法, 需注意fs里的方法是异步的
// fs.readdir('./wwwroot', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     for(let i = 0; i<data.length; i++){
//         fs.stat(path + '/' + data[i], (error, stats) => {
//             if (stats.isDirectory()){
//                 dirArr.push(data[i]);
//             }
//         })
//     }

//     console.log(dirArr);
// })

// console.log(dirArr);

// 解决方法：
// 1. 改造for循环 递归实现
// 2. 使用nodejs新特性 async await

// 1.

fs.readdir('./wwwroot', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    (function getDir(i) {
        if (i == data.length){
            console.log(dirArr);
            return;
        }
        fs.stat(path + '/' + data[i], (error, stats) => {
            if (stats.isDirectory()){
                dirArr.push(data[i]);
            }
            getDir(i+1);
        })
    })(0)
})