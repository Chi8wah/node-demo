const fs = require('fs');

async function isDir(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (error, stats) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            if (stats.isDirectory()) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    })
}


function main() {
    let path = './wwwroot';
    var dirArr = [];
    fs.readdir(path, async (err, data) => { // await 外部的方法需为 async 方法, 注意位置
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < data.length; i++) {
            if (await isDir(path + '/' + data[i])) {
                dirArr.push(data[i]);
            }
        }
        console.log(dirArr);
    })
}

main();