/*
*   模块化规范
*   Node.js遵循了CommonsJs模块化规范，CommonJs规定了模块的特性和个模块之间如何相互依赖
*
*   CommonJs规定：
*       1.每个模块内部，module变量代表当前模块
*       2.module变量是一个对象，他的exports属性(即module.exports)是对外的接口
*       3.加载某个模块，其实是加载给模块的module.exports属性。require()方法用于加载模块
*
*
* */