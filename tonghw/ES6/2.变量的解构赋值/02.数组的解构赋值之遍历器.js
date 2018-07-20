//等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

let [a] = 1; //转为对象以后不具备 Iterator 接口
let [b] = true; //转为对象以后不具备 Iterator 接口
let [c] = null; //转为对象以后不具备 Iterator 接口
let [d] = undefined; //转为对象以后不具备 Iterator 接口
let [e] = {}; //身就不具备 Iterator 接口
console.log(a); //is not iterable
console.log(b); //is not iterable
console.log(c); //is not iterable
console.log(d); //is not iterable
console.log(e); //is not iterable

//set结构解构赋值
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x); //a
console.log(y); //b
console.log(z); //c

//Generator函数解构赋值
function* fn() {
  let a = 1;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
let [first, second, third, fourth, fifth, sixth] = fn();
console.log(first); //0 
console.log(second); //1
console.log(third); //1
console.log(fourth); //2
console.log(fifth); //3
console.log(sixth); //5