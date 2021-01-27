//object对象的方法

Object.is()
// 将一个对象的属性和方法设置为另一个对象的原型
Object.setPrototypeOf();
// 获取原型对象
Object.getPrototypeOf();
//合并对象，如果有的话，则覆盖
Object.assign();



export let a = 100;
// 暴露
export  function abc(){
    console.log(abc);
}
export default {}
// 1.分别暴露
// 变量或函数前加export
// 2.统一暴露
// exprot{}
// 3.默认暴露
// exprot defaullt {
//  可以是任意数据类型
// }