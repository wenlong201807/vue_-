//1 let声明的变量只在它所在的代码块有效

{
  var a = 10;
  let b = 5;
}
console.log(a); // 10
console.log(b); //b is not defined

for (let i = 0; i < 10; i++) {
  console.log(i); //0 1 2 3 4 5 6 7 8 9
}
console.log(i); //undefined

for (var i = 0; i < 10; i++) {
  console.log(i) //0 1 2 3 4 5 6 7 8 9
}
console.log(i); //10


var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); //10

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); //6

for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i); //abc abc abc
};



//2 变量提升
console.log(a); //undefined
var a = 1;
console.log(b); // b is not defined
let b = 10;

//3.暂时性死区  ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错
var tmp = 123;

if (true) {
  tmp = 'abc'; // tmp is not defined
  let tmp;
}

if (true) {
  // tmp = 'abc'; // tmp is not defined
  // console.log(tmp);

  let tmp;
  console.log(tmp); //undefined

  tmp = 123;
  console.log(tmp); //123
} {
  console.log(typeof x);
  // let x;
}

//3.不允许重复声明
function fun() {
  let a = 2;
  var a = 5;
}
fun()(); //fun is not defined

function fn() {
  let b = 2;
  let b = 0;
}
fun()(); //fun is not defined

//不能在函数内部重新声明参数。
function fn(a) {
  let a = 2;
}
fn(2)(); //Identifier 'a' has already been declared

function fn(f) {
  {
    let f;
  }
}

//let的作用域`：只在声明所在的块级作用域内有效。
//let命令声明的变量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。