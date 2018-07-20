//语法 :通过export命令显式指定输出的代码，再通过import命令输入。

import {
  stat,
  exists,
  readFile
} from 'fs';

//export 命令  模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

export var firstname = 'mike';
export var secondnam = 'jack';
//等价于
var firstname = 'mike';
var secondnam = 'jack';
export {
  firstname,
  secondnam
}; //优先使用

//export输出函数或类
export function add(x, y) {
  return x + y;
}

//export重命名
function v1() { ...
}

function v2() { ...
}

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

//import命令
import {
  first,
  second
} from './t.js'

//import重命名 如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名
import {
  first as one
} from './t.js'
//import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。
//mport命令具有提升效果，会提升到整个模块的头部，首先执行
//由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

//模块的整体加载


//export default 命令 为模块指定默认输出
export.default
function () {
  console.log('foo');
}


//export 与 import 的复合写法