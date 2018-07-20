//基本用法

//es5
function fn(x, y) {
  y = y || 'world';
  console.log(x, y);
}
fn('hello'); //hello world
fn('hello', 'china'); //hello china
fn('hello', ''); //hello world

//es6 
function fn1(x, y = 'world') {
  console.log(x, y);
}
fn1('hello'); //hello world
fn1('hello', 'china'); //hello china
fn1('hello', ''); //hello

function fn2(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
const p = new fn2();
console.log(p); //fn2 {x :0, y : 0}