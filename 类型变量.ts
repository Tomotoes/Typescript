/* 1. 类型变量默认值 */
function creteArray<T = string>(length: number, value?: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
      result[i] = value
  }
  return result
}


/* 2. 类型推导 */
interface IAnimal {
	live(): void
}
interface IDog extends IAnimal {
	woof(): void
}

// Has type 'number'
type Foo = IDog extends IAnimal ? number : string

// Has type 'string'
type Bar = RegExp extends IDog ? number : string

type iFoo<T> = [T] extends [any] ? T[] : never
