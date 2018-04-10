interface IXxoO {
  readonly he:number;
  readonly she?: IUser;
}

let I: IXxoO = {
  he: 11,
  she:{
    name: "Leann",
    age: 15,
    sex: true,
    work(time?: Date):string {
      return "haha";
    },
    eat(): void {
      /* xoxo */
    }
  }
};

/* 无法赋修改值 I.he = 12;*/

/* 只读数组 */

let ro: ReadonlyArray<number> = [1, 2, 3];
console.log(ro);
/* [1,2,3] */

// ro.push(4); Error 
// ro[1] = 2; Error