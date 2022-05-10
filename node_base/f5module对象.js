/*
*   module对象
*   在每个js自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息
*
*   MODULE.EXPORTS对象
*   在自定义模块中，可以使用module.export对象，将模块内的成员共享出去，共外界使用
*   外界使用require()方法导入自定义模块时，得到的就是module.exports所指向的对象
*
* */
const PI=3.141592654;
function area(r) {
    return this.PI*r*r;
}
console.log(module);
//如果yeoman让自定义模块内的成员被外界使用
module.exports.PI=PI;//这是向module.exports上挂载PI属性
module.exports.area=area;//这是向module.exports上挂载area方法
console.log(module.exports);
/*
打印的module对象
Module {
    id: '.',
        path: 'E:\\study-h5\\node_base',
        exports: {},
    filename: 'E:\\study-h5\\node_base\\f5module对象.js',
        loaded: false,
        children: [],
        paths: [
        'E:\\study-h5\\node_base\\node_modules',
        'E:\\study-h5\\node_modules',
        'E:\\node_modules'
    ]
}*/
