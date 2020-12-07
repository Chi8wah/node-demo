function formatApi (api) {
    return "http://www.test.com/" + api;
}

// 通过exports 或 module.exports 暴露模块内原本为私有的属性或方法
exports.formatApi = formatApi;