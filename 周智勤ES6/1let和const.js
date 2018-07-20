// {
//     let a = 10;
//     var b = 10;
// };
// // let声明 的变量只在代码块内有效
// console.log(a); //报错
// console.log(b);

// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i)
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i) //循环体外引用会报错

// // var 的情况
// console.log(foo); // 输出undefined
// var foo = 2;

// // let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;

// 不存在变量提升
// if (true) {
//     // TDZ开始
//     tmp = 'abc'; // ReferenceError
//     console.log(tmp); // ReferenceError

//     let tmp; // TDZ结束
//     console.log(tmp); // undefined

//     tmp = 123;
//     console.log(tmp); // 123
// }

// 不允许重复声明
// 报错
// function func() {
//     let a = 10;
//     var a = 1;
// }

// // 报错
// function func() {
//     let a = 10;
//     let a = 1;
// }