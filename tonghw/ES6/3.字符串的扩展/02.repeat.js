//repeat方法返回一个新字符串，表示将原字符串重复n次。
// console.log('x'.repeat(8)); //xxxxxxxx
// console.log('hello'.repeat(2)); //hellohello
// console.log('tong'.repeat(0)); //

// 参数如果是小数，会被向下取整。
// console.log('huwei'.repeat(2.3)); //huweihuwei
// console.log('huwei'.repeat(2.9)); //huweihuwei

//如果repeat的参数是负数或者Infinity，会报错。
// console.log('huwei'.repeat(-12));
// console.log('huwei'.repeat(Infinity));

//但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
//console.log('huwei'.repeat(-0.5)); //

//参数NaN等同于 0
//console.log('huwei'.repeat(NaN)); //

//如果repeat的参数是字符串，则会先转换成数字。
// console.log('huwei'.repeat('NaN')) //
// console.log('huwei'.repeat('3')) //huweihuweihuwei

// console.log('huwei'.repeat(true)) //huwe
// console.log('huwei'.repeat(false)) //

console.log('huwei'.repeat(null)) //
console.log('huwei'.repeat()) //