//es6 允许使用箭头(=>)定义函数  等价于匿名函数

let f = v => v;
//等价于
let f = function (v) {
  return v;
}

// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
let f1 = () => 5;
//等价于
let f1 = function () {
  return 5;
}

//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

let sum = (num1, num2) => {
  return num1 + num2;
}

//如果箭头函数只有一行语句，可以省略大括号
let sum2 = (sum2, sum3) => sum2 + sum3;

// 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。