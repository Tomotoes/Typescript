/*
  属性默认是 public
  private 只能在本类中访问，不能被继承
  protected 只能在派生类中访问，能被继承

  技巧，构造函数 添加 protected 修饰符，意味着该类 不能在外部被实例化,但是可以被继承
*/
class Person {
  private wechat:number;
  public name: string;
  protected sex: boolean;
  constructor(wechat: number, name: string,sex:boolean) {
    this.wechat = wechat;
    this.name = name;
    this.sex = sex;
  }
}
const Leann: Person = new Person(123, "Leann",false);

console.log(Leann.name);

class Women extends Person {
  constructor(wechat:number,name:string,sex:boolean) {
    super(wechat, name,sex);
  }
}

/*
  一个快忘记的知识点~ 参数属性
  在构造函数中写参数 constructor(修饰符 属性名:属性类型)
  即 自动定义该属性，并初始化
*/

class Man {
  constructor(public chicken: number) {
  }
}
console.log(new Man(12).chicken);


/* 存取器 */

class Employee {
  constructor(private _phone: string) { }
  get phone(): string {
    return this._phone;
  }
  set phone(newPhone: string) {
    this._phone = newPhone;
  }
  static Jump():void {
    console.log("I am Jump!!!!");
  }
}

const e = new Employee("123");
console.log(e.phone);
e.phone = "213";

Employee.Jump();


