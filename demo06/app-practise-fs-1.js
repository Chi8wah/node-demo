const fs = require('fs');
var path = './upload';

fs.stat(path, (err, data) => {
    if(err){
        mkdir(path);
        return;
    }
    if(data.isDirectory()){
        console.log('upload目录存在');
    }else{
        // 先删除文件再创建目录
        fs.unlink(path, (err) => {
            if(err){
                console.log('创建失败, 请检查传入的目录是否正确');
                return;
            }else{
                mkdir(path);
            }
        });
    }
})

// 创建目录的方法
function mkdir (dir) {
    fs.mkdir(dir, (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
}