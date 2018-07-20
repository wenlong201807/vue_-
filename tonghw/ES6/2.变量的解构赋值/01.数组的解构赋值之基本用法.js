//定义:按照一定模式，从数组或对象中提取值，对变量进行赋值。称之为解构赋值

//1 模式匹配:只要等号两边的模式相同，左边的变量就会被赋予对应的值。

let [a, b, c] = [1, 2, 3];
console.log(a); //1
console.log(b); //2
console.log(c); //3
//从数组中提取值，按照对应位置，对变量赋值。

//2 嵌套数组进行解构

let [a1, [a2], a3] = [4, [5], 6];
console.log(a1); //4
console.log(a2); //5
console.log(a3); //6

let [, , b1] = ['t', 'h', 'w'];
console.log(b1); // w

let [c1, , c2] = [1, 2, 3];
console.log(c1); //1
console.log(c2); //3

let [d1, ...d2] = [1, 2, 3, 4, 5, 6, 7];
console.log(d1); //1
console.log(d2); //[2,3,4,5,6,7]

let [x, y, ...z] = [1];
console.log(x); //1
console.log(y); //undefined
console.log(z); //[]

//3.解构失败 返回undefined
let [f] = [];
let [j, k] = ['a'];
console.log(f); //undefined
console.log(j); //'a'
console.log(k); //undefined

//4. 不完全解构 即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
let [x, y] = ['a', 'b', 'c', 'd'];
console.log(x); //a
console.log(y); //b