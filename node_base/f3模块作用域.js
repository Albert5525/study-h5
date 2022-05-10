/*
*   什么是模块作用域
*   和函数作用域类似，在自定义模块中定义的变量，方法邓程元，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域。
*
*
*   模块作用域的好处：
*       防止全局变量污染的问题
*
*
* */
const username='zhangsan';
function sayHello() {
    console.log("我是f3中的=="+username);
}
sayHello();