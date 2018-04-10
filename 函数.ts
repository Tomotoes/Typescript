let myAdder: (x: number, y: number) => number;

myAdder = function (x: number, y: number): number{
  return x + y;
};

/* 接口函数类型 */
interface IAdder{
  (x: number, y: number):number;
}

let yourAdder: IAdder;
yourAdder = function (x: number, y: number): number{
  return x + y;
};

/* 可选参数 */

function buildFamily(father: string, mother: string, sister?: string):void {
  console.log("family!!!");
}
buildFamily("X", "Y");


/* 剩余参数 */
function buildName(first: string, ...parameters:string[]): void{
  parameters.forEach(e => {
    console.log(e);
  });
}

/* 重载！ */
function Hello(msg: string): void;
function Hello(msg: number): string;

function Hello(msg:any):any{
  if (typeof msg === "string") {
    console.log("typeof === string!");
  } else {
    return "aaa";
  }
}

console.log(Hello(1));
Hello("");

// Hello(false); 错误


function igetValue(): any{
  let sum = 0;
  return function _(x:number) {
    if (x !== undefined) {
      sum += x;
      return _;
    } else {
      return sum; 
    } 
  };
  
}
console.log(igetValue()(2)(3)());