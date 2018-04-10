/* 使用 type 关键字定义类型
  格式： type 类型别名 = 类型; */
type a = Array<string>;

function dance(people: a): void{
  people.forEach(e => console.log(e));
}

dance(["1", "2"]);


interface ISquare {
  kind: "square";
  size: number;
}
interface IRectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface ICircle {
  kind: "circle";
  radius: number;
}

type Shape = ISquare | IRectangle | ICircle;

function area(s: Shape) {
  switch (s.kind) {
      case "square": return s.size * s.size;
      case "rectangle": return s.height * s.width;
      case "circle": return Math.PI * s.radius ** 2;
  }
}
