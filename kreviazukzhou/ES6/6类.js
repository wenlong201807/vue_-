class Point {
    constructor(x, y) {
        // this代表实例对象
        this.x = x;
        this.y = y;
    };
    // 方法前面不需要加function
    // 方法之间不要加，
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}
console.log(Point)
    // ****************************************//
class Bar {
    doStuff() {
        console.log('stuff');
    }
}
// 使用时，直接对类使用new命令，与构造函数方法完全一致
let b = new Bar();
b.doStuff() //stuff

// Object.assign方法可以很方便的一次向类添加多个方法
class Point {
    // constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
    constructor() {

    }
}
Object.assign(Point.prototype, {
    toString() {},
    toValue() {}
});

// constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
class Foo {
    constructor() {
        return Object.create(null);
    }
}

new Foo() instanceof Foo;
// false
// ******************************************//
//定义类
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString'); // true
// 上面代码中， x和y都是实例对象point自身的属性（ 因为定义在this变量上）， 所以hasOwnProperty方法返回true， 而toString是原型对象的属性（ 因为定义在Point类上）， 所以hasOwnProperty方法返回false。 这些都与 ES5 的行为保持一致。
// 与 ES5 一样， 类的所有实例共享一个原型对象。
var p1 = new Point(2, 3);
var p2 = new Point(3, 2);

p1.__proto__ === p2.__proto__;
//true