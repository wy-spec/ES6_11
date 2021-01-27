// 使用Promise 分装文件操作
const fs = require('fs');
fs.readFile('C:/Users/Administrator/Desktop/01.png', (err, data) => {
    if (err) {
        throw err;
    }
    // console.log(data.toString());
})
//使用Promise封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('C:/Users/Administrator/Desktop/辞职报告.docx', (err, data) => {
        //    如果是错误
        if (err) {
            reject(err);
        }
        resolve(data);
    })
})
// then返回的也是一个Promise对象
p.then(function (value) {
    // console.log(value.toString());
    // 1.如果是返回的非Promise，走的成功，则是成功，成功内容是return的内容，反之返回失败
    // 2.如果是返回的Promise对象的话，走的成功就显示成功，内容是括号里的成功值
    // 3.抛出错误
    // return new Promise((resolve, reject) => {
    //     // resolve("ok");
    //     reject("error");
    // })
    // promise对象返回的rejected,返回值是里边的内容
    // throw new Error("出错啦！");
}, function (reason) {
    console.log(reason);
})

// 简单的链式then调用方式
p.then(value => {

}, reason => {

}).then(value => {

}, reason => {

})

// Promise 封装ajax
//接口地址：  https://api.apiopen.top/getJoke

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//promise
const pm = new Promise((resolve, reject) => {
    //创建对象
    const xhr = new XMLHttpRequest();
//处理请求,初始化
    xhr.open('get', 'https://api.apiopen.top/getJoke');
//请求发送
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                // console.log(xhr.responseText);
                resolve(xhr.responseText);
            } else {
                // console.log(xhr.response);
                reject(xhr.status);
            }
        }
    }

})
pm.then(value => {
    // console.log(value);
},reason => {
    // console.log(reason);
})

//异步读取多个文件

//第一种方案是，地狱套娃，这种方案不推荐使用
//因为套娃式代码导致代码缩进冗余
//现在推荐使用Promise 来实现代码的简洁和异步执行

const p_file = new Promise((resolve, reject) => {
    fs.readFile('C:/Users/Administrator/Desktop/1.txt',(err, data) => {
        console.log(data.toString())
    //    强制成功
        resolve(data);
    });
});

p_file.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('C:/Users/Administrator/Desktop/2.txt',(err, data) => {
            console.log(data.toString())
            resolve([value,data]);
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('C:/Users/Administrator/Desktop/3.txt',(err, data) => {
            console.log(data.toString());
            value.push(data);
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
})
















