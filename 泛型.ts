/* 泛型就是类型变量！一种特殊的变量，只用于表示类型而不是值 */
function HelloWorld<T>(arg: T): T{
  return arg
}
HelloWorld('Hello')
HelloWorld<number>(123)

/*
 使用泛型函数有两种方式：
  - 直接方法名，会自动推到出泛型
  - 指明泛型，Hello<number>(123)
*/

/* 泛型的缺点：不能使用参数特有的属性 */
function errPrintLength<T>(arg: T): number{
  // return arg.length; 错误：类型 T 不存在属性 length
  return 1
}

function printLength<T>(arg: Array<T>): number{
  return arg.length
}

/* 需要注意，箭头函数需要将泛型放到函数的最前面 */
let myIdentity: <T>(arg: T) => T = HelloWorld

/* 泛型接口 */
interface ITxing<T>{
  (arg: T): T
}

let myTxing: ITxing<number> = HelloWorld

myTxing(1)



/* 泛型类 */
class Txing<T>{
  constructor(protected name: T) { }
  add:(x: T, y: T)=>T
}
const T = new Txing<number>(123)
T.add = (x: number, y: number) => x + y

/* 泛型抽象类 */
abstract class ATClass<T>{
  abstract run(arg: T): T
}


/* 泛型约束 */
interface ILength{
  length: number
}
function turePrintLength<T extends ILength>(arg: T): void{
  console.log(arg.length)
}
turePrintLength({ length: 5 })




function create<T>(c: {new(): T; }): T {
  return new c()
}
/* c: {new(): T; } c的实例返回的是 T 类型 */


class BeeKeeper {
  hasMask: boolean
}

class ZooKeeper {
  nametag: string
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: ZooKeeper
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag // typechecks!
createInstance(Bee).keeper.hasMask  // typechecks!

/* 泛型的默认参数！ */
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
      result[i] = value
  }
  return result
}

/* 参数之间相互约束 */
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
      target[id] = (<T>source)[id]
  }
  return target
}

let x = { a: 1, b: 2, c: 3, d: 4 }

copyFields(x, { b: 10, d: 20 })
// 上例中，我们使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。


/* 方法返回值的一个小技巧 返回值 as 类型 */
function http<T>(url: string): Promise<T>{
	return new Promise<T>(null)
}
function fetch<T>(url: string): Promise<T> {
  // 远程请求数据并返回结果
  return http(url).then(data => {
    return data as T
  })
}

class Userc {
  name: string
}

// 泛型使用
let user = fetch<Userc>('https://tasaid.com/user')
