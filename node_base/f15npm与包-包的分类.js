/*
*   接f14。
*   包的分类
*   包可以分为项目包和全局包
*
*   被安装到项目的node_modules目录中的包，都是项目包
*   项目包又被分为两类，分别是：
*   开发依赖包：被记录到devDependencies节点中的包，只在开发期间会用到
*   核心依赖包：被记录到dependencies节点中的包，在开发期间和上线之后都会用到
*   npm i 包名 -D;// 开发依赖包(会被记录到devDependencies节点下)
*   npm i 包名;   //核心依赖包(会被记录到dependencies节点下)
*
*   全局包
*   在执行npm install命令时，如果提供了 -g 参数，则会吧包安装为全局包
*   npm install 包名 -g;  //则是全局安装包
*   npm uninstall 包名 -g;    #卸载全局安装的包
*
*
*   包i5ting_toc一个好用的可以吧md文档转为html页面的小工具
*   将 i5ting_toc安装为全局包
*   npm install -g i5ting_toc
*   调用 i5ting_toc,轻松实现 md 转 html 的功能
*   i5ting_toc -f 要转换的md文件路径 -o
*
*
*
*
*
*
* */




















