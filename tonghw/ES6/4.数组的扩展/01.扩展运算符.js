//扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

console.log(...[1, 2, 3]); //123
console.log(1, ...[2, 3, 4], 5); //12345


//扩展运算符用于函数调用
function add(x, y) {
  return x + y;
}
const number = [10, 20];
console.log(add(...number)); //30