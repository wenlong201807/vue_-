//对象的解构赋值，变量必须与属性同名，才能取到正确的值
let {
  a,
  b
} = {
  a: 'hello',
  b: 'world'
}
console.log(a); //hello
console.log(b); //world

let {
  c,
  d
} = {
  d: 'welcome',
  c: 'bad'
}
console.log(c); //bad
console.log(d); //welcome

let {
  f
} = {
  g: 'noono'
};
console.log(f); //undefined

//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
let {
  f: g
} = {
  f: 'hello'
};
console.log(g); //hello

let obj = {
  m: 'ob',
  n: 'arr'
};
let {
  m: o,
  n = k
} = obj;
console.log(o);
console.log(k);

let obj = {
  first: 'hello',
  last: 'world'
};
let {
  first: f,
  last: l
} = obj;
console.log(f);
console.log(l);