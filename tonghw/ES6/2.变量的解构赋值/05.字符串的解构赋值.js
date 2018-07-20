//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

const [a, b, v, d, e] = ['hello'];
console.log(a); //h
console.log(b); //e
console.log(v); //l
console.log(d); //l
console.log(e); //o