// 可同时使用多个包
const sd = require('silly-datetime');
const md5 = require('md5');

console.log(sd.format(new Date(),'YYYY-MM-DD HH:mm'));