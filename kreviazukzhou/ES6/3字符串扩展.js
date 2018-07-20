// 传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。
let s = 'hello world';
s.startsWith('hellow') //true
s.endsWith('world') //true
s.includes('or'); //true
// 可以加第二个参数，表示从第几个开始搜索
// repeat表示重复次数,如果是小数会被取整，如果为负数会报错,nan等同于0
'x'.repeat(3) //'xxx'
'x'.repeat(0) //''
'x'.repeat(NaN) //''

// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
// let s1 = `<h1>你好</h1>`;
// console.log('s1:' + s1)

// 模板字符串嵌套
let t = `<ul>
  ${[1,2,3,4,5].map((item) => {
    return `<li>${item}</li>`;
  }).join('')}
  </ul>
`
console.log(t)