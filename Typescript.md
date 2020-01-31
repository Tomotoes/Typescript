
boolean 
布尔类型

number
数值类型

string
字符串类型

void
空值，表示没有任何返回值的函数

声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;


在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：

let u: undefined = undefined;
let n: null = null;
undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。

与 void 的区别是，undefined 和 null 是所有类型的子类型。
也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

any
表示任意值类型
声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。


如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。


联合类型
string | number;

赋值的时候，变量的形状必须和接口的形状保持一致。


type Name = string;
类型别名


readonly 只可以在构造函数中赋值！

TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：

复制到剪切板
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：

复制到剪切板
a = ro as number[];


当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。


编译：

tsc helloworld.ts


如果我们想快速测试一个文件，可以使用 ts-node，ts-node 可以让我们通过命令直接执行 *.ts 文件：

npm i -g ts-node

# 执行当前文件夹下 demo.ts 文件
ts-node demo.ts
# 输出的执行结果


关于 tsc，一般来说，全局安装的方案并不是很棒，我们可以把 typescript 安装到本地项目目录中：

npm i  --save-dev typescript
这样在 package.json 的 scripts 中可以引用 tsc 命令：

{
  // ...
  "scripts": {
    "build": "tsc"
  },
  "devDependencies": {
    // ...
    "typescript": "^2.4.2",
  },
}
使用 npm run build 命令即可启用 tsc 命令编译本地目录，typescript 会去查找目录下的 tsconfig.json 配置文件。


直接调用 tsc，编译器会从当前目录开始去查找 tsconfig.json 文件，逐级向上搜索父目录。
调用 tsc -p，可以指定一个包含 tsconfig.json文件的目录进行编译。如果没有找到 tsconfig.json 文件，TypeScript 会编译每个文件并在对应文件的同级目录产出。

