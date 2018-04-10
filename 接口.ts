/*
1. 首字母规范是 I
2. 接口中的元素 分号 作为间隔
3. 实现接口的对象可以不用管 其元素顺序
4. 接口中的元素可以借助 ? 成为一个 非必须实现的特例
5. 如果在其他处再一次声明接口，后续声明的属性 将无缝规定！

6. 让接口可以添加任意属性，[propName:string]:any; 
  ** 一旦添加了任意属性，那么确定属性和可选属性都必须是它的子属性 **
7. 接口的实现 使用关键字 implements
8. 接口可以相互继承 通过关键字 extends
9. 接口还可以继承类 , 如果类中有私有成员，必须是 该类的子类才能继承接口

10. 继承接口时，多一些属性也是不可以的，不允许添加未定义的属性

在实战中 接口的可选属性还是不错的
*/

interface IUser {
  name: string
  sex: boolean
  work: (time?: Date) => string
  markLove?: (she: IUser) => IUser
  [propName: string]: any
}

class Student implements IUser {
  name:string
  sex:boolean
  work(): string {
    return '1'
  }
  eat():void {
    console.log()
  }
  life(): void {
    console.log(`${this.name} is ${this.sex?'boy':'girl'}`)

  }
  constructor(name:string,sex:boolean) {
    this.name = name
    this.sex = sex
  }
}
new Student('Simon',false).life()

let Simon: IUser = {
  name: 'Simon',
  age: 15,
  sex: true,
  work(time?: Date):string {
    return 'haha'
  },
  eat():void {
   console.log('Eat')
  },
  dead(): void {
    console.log('I dead!')
  }
}

Simon.work()

interface IUser {
  eat: () => void
}


/* 当然上述的接口 都是在描述带有属性的普通对象，现在 带你看一来 接口来约束函数类型 */

interface IShow {
  (name: string, time?: Date): void
}

const show: IShow = function (name:string):void {
  console.log('show')
}


/* 可索引类型 */

interface INumberDictionary {
  [index: string]: string
  // length: number;// 与给出的字符串索引类型不匹配
  name: string
}


interface IFood {
  food: Array<string>
  bread(time: Date): string
}

class Food implements IFood {
  constructor(food:Array<string>) {
    this.food = food
  }
  food:Array<string>
  bread(time: Date): string {
    return 'I am eating!'
  }
}
console.log(new Food(['bread']).food[0])

interface ILunch extends Food,IUser {
  time: Date
}

/* 动态类型 */
interface ICounter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): ICounter {
  let counter:ICounter = <ICounter>function (start: number):void { }
  counter.interval = 123
  counter.reset = function ():void { }
  return counter
}

let c:ICounter = getCounter()
c(10)
c.reset()
c.interval = 5.0

/* 用接口描述数组 */
interface INumberArray{
  [index: number]: number
}

class Boy{

}
let boys: Array<Boy>



/* IArguments 内置对象的描述接口 */
function Alis(x: number, b: string) {
  let Arr: IArguments = arguments
}