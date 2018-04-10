namespace Validation{
  export interface IStringValidator{
    isAcceptanle(s: string): boolean;
  }
}

let isString: Validation.IStringValidator;

namespace Shapes{
  export namespace Polygons{
    export class Square{}
  }
}
import polygons = Shapes.Polygons;
let sq = new polygons.Square();