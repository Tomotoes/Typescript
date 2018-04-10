interface IBrid{
  fly();
  layEggs();
}

interface IFish{
  swim();
  layEggs();
}

function getSmallPet():IFish|IBrid {
  let pet: IBrid; 
  return pet;
}

let pet = getSmallPet();

/* 访问某特有属性时，报错 */
// if (pet.swim) {
// 为了使代码能正常工作，不能不使用 类型断言
if ((<IFish>pet).swim) {
  
}

/* 当然，我们还有一种更高级的解决方法 */
function isFish(pet: IFish | IBrid): pet is IFish{
  return (pet as IFish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
