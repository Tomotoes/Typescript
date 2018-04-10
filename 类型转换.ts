let someValue: any = 'This is a string'

let strLength: number = (<string>someValue).length
let strLenth1: number = (someValue as string).length

function imitatePush<T>(arr: T[],el:T): void {
  (arr as Array<T>).push(el)
}

let myArr: number[] = [1, 2, 3]
imitatePush(myArr, 4)

console.log(myArr.pop())
