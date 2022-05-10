//当时用require加载模块时会执行被加载的模块中的代码
//注意在使用require加载自定义模块时可以省略.js后缀名
// const f1=require('./f1.js');
const f1=require('./f1');
console.log(f1);