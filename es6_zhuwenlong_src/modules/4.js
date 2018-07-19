import { h, bh } from './5.js';

const sum = () => {
  console.log(h, bh);
  return h + bh;
};

const show = () => {
  console.log('执行了show');
  return 1;
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 方法在花括号内
  showName() {
    return `我的名字是${this.name}`;
  }
}

export { h, bh, sum, show };
export default { Person };
