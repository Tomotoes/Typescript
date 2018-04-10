/* 
枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
不带有初始化器且它之前的枚举成员是一个 数字常量。 当前枚举成员的值为它上一个枚举成员的值加1。
建议声明枚举时，添加 const关键字
*/

enum Direction{
  Up,
  Down,
  Left,
  Right
}

console.log(Direction)
/* 
  { '0': 'Up',
  '1': 'Down',
  '2': 'Left',
  '3': 'Right',
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3 }
*/

enum Num{
  One = 1,
  Two,
  Three
}
console.log(Num)
/* { '1': 'One', '2': 'Two', '3': 'Three', One: 1, Two: 2, Three: 3 } */


enum FileAccess {
  // constant members
  None,
  Read    = 1 << 1,
  Write   = 1 << 2,
  ReadWrite  = Read | Write,
  // computed member
  G = '123'.length,
  // W, 果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
}

/* const 修饰的枚举，不能包含计算成员,必须是常数 */
const enum Boady{
  
}

