//copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
console.log([1, 2, 3, 4, 5].copyWithin(0)); //[ 1, 2, 3, 4, 5 ]
console.log([1, 2, 3, 4, 5].copyWithin(1)); //[ 1, 1, 2, 3, 4 ]
console.log([1, 2, 3, 4, 5].copyWithin(2)); //[ 1, 2, 1, 2, 3 ]
console.log([1, 2, 3, 4, 5].copyWithin(3)); //[ 1, 2, 3, 1, 2 ]
console.log([1, 2, 3, 4, 5].copyWithin(4)); //[ 1, 2, 3, 4, 1 ]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1)); //[1, 2, 3, 3, 4]