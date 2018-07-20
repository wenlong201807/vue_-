// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

// 参数变量是默认声明的，所以不能用let或const再次声明。
function foo(x = 5) {
    let x = 1; // error
    const x = 2; // error
}

// 另外，一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
// let x = 99;

// function foo(p = x + 1) {
//     console.log(p);
// }

// foo() // 100

// x = 100;
// foo() // 101

// 上面代码中， 参数p的默认值是x + 1。 这时， 每次调用函数foo， 都会重新计算x + 1， 而不是默认p等于 100。

// 展开运算符配合数组
// let k = [1, 2, 32, 4, 5, 67];
// console.log(...k)


// 求数组中最大值
// let m = [1, 56, 23, 65, 89, 23, 64];
// // let max = Math.max.apply(null, m);
// // console.log(max);
// // 在es6中
// let max = Math.max(...m);
// console.log(max);

// 复制数组
// es5中
let m = [1, 2, 3, 4, 5];
// let k = m.slice();
// console.log(k);
// let j = m.concat();
// console.log(j);
// // es6中
// let newArrray = [...m];
// console.log(newArrray)
let [...newArray2] = m;
console.log(newArray2);
let m = 10;