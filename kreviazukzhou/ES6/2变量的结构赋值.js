// let [a, b, c] = [1, 2, 3];
// let [a, [b, c]] = [1, [2, 3]];
// let [a, ...b] = [1, 2, 3, 4];
// let [a, b, ...c] = ['www'];
// 默认值
// let [a, b = '12'] = ['a']
// 对象解构
// let { a, b } = { b: "sv", a: "dvds" }

// 配合展开运算符
// let [a, [b, ...c], d] = [1, [2, 3, 4, 5], 6];
// console.log(a)
// console.log(b)
// console.log(c) // [3,4,5]
// console.log(d)


//如果解构右侧的值为undefined或者没有值时，才会取默认值
// let [a, b = '2', c = '45'] = [1, undefined];
// console.log(a)
// console.log(b)
// console.log(c)

// 默认值可以引用解构赋值的其他变量，但该变量必须已声明
// let [a = '1', b = a] = [1];
// console.log(a)
// console.log(b)

// 对象解构赋值
// let { foo, bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo, bar)

// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let { bar, foo } = { foo: "aaa", bar: "bbb" };
// console.log(bar)
// console.log(foo)

// let { baz } = { foo: "aaa", bar: "bbb" };
// console.log(baz) // undefined


// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// console.log(foo) // error  //foo只是为了与=后面的foo进行解构
// console.log(baz) // aaa

// 嵌套解构的对象解构
// let { a: { x: ax, y: ay }, user: { name, td: std } } = {
//     a: { x: 10, y: 20 },
//     user: { name: 'zhou', age: '19', td: [1, 2, 3] }
// }
// console.log('ax', ax)
// console.log('ay', ay)
// console.log('std', std)
// console.log('name', name)

// 解构现存对象
// let { max, min } = Math; //Math对象中正好有max和min方法
// console.log('max(1,2,3,4,4:' + max(1, 2, 3, 4, 5));
// console.log('min(1,2,3,4,4:' + min(1, 2, 3, 4, 5));

// 对数组进行对象属性的结构，数组也是特殊的对象
// let arr = [1, 2, 3];
// let { 0: a, 1: b, 2: c } = arr;
// console.log(a)
// console.log(b)
// console.log(c)