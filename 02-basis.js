// 声明一个变量a ，同时指定它的类型为number
{
    var a = void 0;
    // a 的类型设置为了 number ，在以后的使用过程中 a 的值只能是数字
    a = 10;
    a = 33;
}
// a = "hello"; // 此行代码会报错，因为 变量a 的类型是 number，不能赋值字符串
// 声明完变量直接进行赋值
// let c: boolean = false;
// 如果变量的声明和赋值是同时进行的， TS 可以自动对变量进行类型检测
var c = false;
c = true;
//  JS 中的函数时不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
