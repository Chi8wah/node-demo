// 普通方法
// function test () {
//     return 'hi NodeJS';
// }

// console.log(test());

// 异步方法

// async function test () {
//     return 'hi NodeJS';
// }

// console.log(test()); 
// 输出: Promise { 'hi NodeJS' }

// --------------------------------
// async function test () {
//     return 'hi NodeJS';
// }

// // await 必须用在 async 方法内
// async function main () {
//     let data = await test(); // 获取异步方法内的数据
//     console.log(data);
// }

// main();

// ---------------------------------

// (?) async 方法建议返回一个 Promise 否则其将自动包装成 Promise 
async function test () {
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            let name = 'test';
            resolve(name);
        }, 1000);
    })
}

// await 必须用在 async 方法内
async function main () {
    let data = await test(); // 获取异步方法内的数据
    console.log(data);
}

main();