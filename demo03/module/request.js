var obj = {
    get: function () {
        console.log('从服务器获取数据');
    },
    post: function () {
        console.log('提交数据');
    }
}

// 暴露方法一: 将obj作为exports的一个属性, 适合多个独立的方法
// exports.obj = obj;

// 暴露方法二: 将obj直接赋值给exports, 适合已打包好的整个对象
module.exports = obj;