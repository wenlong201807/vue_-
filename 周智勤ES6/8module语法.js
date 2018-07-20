var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };

// 报错
export 1;

// 报错
var m = 1;
export m;
// ************************正确***************************//
// 写法一
export var m = 1;

// 写法二
var m = 1;
export { m };

// 写法三
var n = 1;
export { n as m };
//*************************** */
// 报错
function f() {}
export f;

// 正确
export function f() {};

// 正确
function f() {}
export { f };