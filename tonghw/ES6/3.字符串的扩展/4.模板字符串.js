//模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

//普通字符串
console.log(`js is a good language '\n' we should study her.`); //js is a good language ' ' we should study her.

//模板字符串
console.log(`js can be help we
to look the web`); //

// 字符串中嵌入变量 模板字符串中嵌入变量，需要将变量名写在${}之中。
let b = 'world';
console.log(`welcome to web${b}`); //welcome to webworld

//如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中

//大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。模板字符串之中还能调用函数。如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。如果模板字符串中的变量没有声明，将报错。