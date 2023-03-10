// 也可以直接使用字面量进行类型声明

let a: 10;
a = 10;

// 可以使用 | 来连接多个类型（联合类型）
let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | string;
c = true;
c = "hello";

/* 
  any 表示的是任意类型,一个变量设置类型为 any
  相当于对该变量关闭了TS的类型检测
  不建议使用 any 类型 
*/
// 声明变量如果不指定类型,则 TS 解析器会自动判断变量的类型为 any (隐式的 any )
// any 类型的变量,可以赋值给任意变量
{
  let d: any;
  d = 10;
  d = true;
  d = "hello";
}

// unknow 表示未知类型的值
// 实际上就是一个类型安全的any
// unknow 类型的变量,不能直接赋值给其他变量
{
  let e: unknown;
  let s: string;
  // 类型断言,可以用来告诉解析器变量的实际类型
  /* 
    语法:
      变量 as 类型
      <类型>变量 
  */
  s = e as string;
  s = <string>e;
}
{
  function fn(num: number) {
    if (num > 0) {
      return true;
    } else {
      return 123;
    }
  }

  // void 用来表示空,以函数为例,就表示没有返回值的函数
  function fn0(): void {}

  // never 表示永远不会返回结果
  function fn1(): never {
    throw new Error("error");
  }
}
