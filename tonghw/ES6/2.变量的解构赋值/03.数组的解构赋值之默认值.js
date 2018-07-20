//解构赋值允许指定默认值
let [a1 = 'b'] = [];
console.log(a1); //b
let [a3 = 'b'] = [undefined];
console.log(a3); //b

let [a2 = 'b'] = [null];
console.log(a2); //null
let [a4 = 'b'] = [1];
console.log(a4); //1
let [a5 = 'b'] = [{
  "a": "hello"
}]
console.log(a5); //{ a: 'hello' }
let [a6 = 'b'] = [true];
console.log(a6); //true

//1.只有当一个数组成员严格等于undefined(数组为空或者为undefined)，默认值才会生效。



let [x = 1, y] = [undefined];
console.log(x); //1
console.log(y); //undefined

let [j = 5, k] = ['hello'];
console.log(j); //hello
console.log(k); //undefined

let [x = 10, y] = [2, 3];
console.log(x); //2
console.log(y); //3




//2.如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
// function fn() {
//    console.log('ddd');
// }

// function fn2() {
//   return 123;
// }
// let [a = fn()] = [1];
// let [b = fn2()] = [];
// console.log(a); //1
//console.log(b); //123

//3. 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
// let [c1 = c2, c2 = 10] = [];
// console.log(c1); //c2 is  not defined
// console.log(c2);

let [c1 = 10, c2 = c1] = [];
console.log(c1); //10
console.log(c2); //10

let [d1, d2 = d1] = [4];
console.log(d1); //4
console.log(d2); //4