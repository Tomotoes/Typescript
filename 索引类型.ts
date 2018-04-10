/* 使用索引类型，编译器就能够检查使用了动态属性名的代码 */
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface IPerson {
    name: string;
    age: number;
}
let person: IPerson = {
    name: "Jarid",
    age: 35
};
let strings: string[] = pluck(person, ["name"]); // ok, string[]

let personProps: keyof IPerson; // 'name' | 'age'

/* 
T[K]， 索引访问操作符。 
 */

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]; // o[name] is of type T[K]
}

let ame: string = getProperty(person, "name");
let age: number = getProperty(person, "age");

// error, 'unknown' is not in 'name' | 'age'
//let unknown = getProperty(person, "unknown"); 

interface IMap<T> {
  [key: string]: T;
}
let keys: keyof IMap<number>; // string
let value: IMap<number>["foo"]; // number

