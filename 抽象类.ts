/* 
  抽象类使用 abstract 关键字
  抽象类不能被实例化
  抽象方法与接口大致相同
  抽象方法或属性 必须被子类实现
*/

abstract class Animal{
  constructor(public kind: string) { }
  move(): void{
    console.log(`${this.kind} is moveing!`);
  }
  abstract eat(food?: string): boolean;
  abstract name: string;
}

class Horse extends Animal{
  constructor(kind: string) {
    super(kind);
  }
  eat(food?: string):boolean {
    return food!==undefined;
  }
  name: string;
}

let fox: Animal;
// fox = new Animal(); 错误 抽象类无法实例化

fox = new Horse("fox");
console.log(fox.eat());
