/* 交叉类型 */
/* 使用 & 将多种类型的共有部分叠加成一种类型 */
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
      (<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
      if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id]
      }
  }
  return result
}

class Person {
  constructor(public name: string) { }
}
interface ILoggable {
  log(): void
}
class ConsoleLogger implements ILoggable {
  log() {
      // ...
  }
}
const jim = extend(new Person('Jim'), new ConsoleLogger())
/* 
1. T & U 说明该类型应该包括 T的属性 与 U的属性
2. <T & U>{} 将一个空对象强制转换成 <T & U>类型
3. 顾名思义 交叉类型与联合类型作用相反
 */
