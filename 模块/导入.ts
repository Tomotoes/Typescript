import {IStringValidator} from "./导出";

class Code implements IStringValidator{
  isAcceptable(s: string): boolean{
    return false;
  }
}

let phone: number = 123456;

export { Code, phone as Apple };

export default function Say() { }