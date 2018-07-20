//ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
let f = 'hell';
console.log(f.padStart(10, 'o')); //oooooohell
let g = 'like';
console.log(f.padEnd(9, 't')); //hellttttt

//如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
let k = 'javascript';
console.log(k.padStart(2)); //javascript

//如果省略第二个参数，默认使用空格补全长度
let l = 'js';
console.log(l.padStart(8)); //      js

//padStart的常见用途是为数值补全指定位数
let d = '12';
console.log(d.padStart(10, '0')); //0000000012

//提示字符串格式
let m = '80';
console.log(m.padStart(5, 'yyyy-mm-dd')); //yyyy-mm-80