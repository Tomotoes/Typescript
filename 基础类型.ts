let booleanV: boolean = false

let numberV: number = 1

let stringV: string = 'Hello'

let numArr: number[] = [1, 2, 3]

let numFan: Array<number> = [4, 5, 6]

/* 元组中的元素，按照类型的给出顺序，元素必须符合，
随后的元素 要保证是 元组给出类型中的一种 */
let tupleV: [number, string] = [1, 'a']
tupleV.push('1')
tupleV.push(1)

enum Color {
  Green,
  Red,
  Yellow,
  Blue = 0,
  Gray= 'Hello'
}

const myColor: Color = Color.Yellow

console.log(Color.Green) // 0
console.log(Color.Gray) // hello
console.log(Color)
/*
{ '0': 'Blue',
  '1': 'Red',
  '2': 'Yellow',
  Green: 0,
  Red: 1,
  Yellow: 2,
  Blue: 0,
  Gray: 'Hello' }
*/

/* 没有赋值的枚举成员 可以利用数组的索引访问 ,并且其默认值是该元素的访问索引*/
console.log(Color[4])

/* 如果不写类型，默认就是 any 类型 */
let angV: any = '1'
angV = 5

let anyArrV: any[] = [1, '', false]

/* never 永远不会返回的类型 */
function getError(message: string = 'Error'): never {
  throw new Error(message)
}

/* 小技巧，参数必须传递 */

function getValue(a: any = getError()): void {
  console.log('value!!!')
}
getValue()


let d: { name: string } = {
  name:'Simon'
}

class Uiser{
  id: number
  name:string
}

let User: Uiser = { id: 1, name: 'Simon' }
/* 有没有一种 对象与类无缝转换的感觉 */
