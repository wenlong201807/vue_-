let s = 'Hello world!';

// str.endsWith(searchString [, position]);
// searchString 要搜索的子字符串。
//position 可选。作为str的长度，默认值为 str.length。

// str.startsWith(searchString [, position]);用来判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 true 或 false。
// searchString 要搜索的子字符串。
//position 在 str 中搜索 searchString 的开始位置，默认值为 0，也就是真正的字符串开头处。

console.log(s.includes('l')); //true
console.log(s.includes('p')); //false
console.log(s.startsWith('h')); //true
console.log(s.startsWith('p')); //false
console.log(s.endsWith('p')); //false
console.log(s.endsWith('d')); //true


console.log(s.includes('o', 1)); //true
console.log(s.includes('o', 8)); //false
console.log(s.startsWith('e', 2)); //false
console.log(s.startsWith('e', 1)); //true
console.log(s.endsWith('H', 0)); //true
console.log(s.endsWith('d', 2)); //false