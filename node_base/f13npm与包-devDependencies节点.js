/*
*   接f12,。
*
*   如果某些包只在项目开发阶段会用到没在项目上线之后不会用到，则建议把这些包巨鹿到devDependencies节点中。
*   与之对应的，如果某些包在开发和项目上线后都需要用到，则建议把这些包巨鹿到dependencies节点中
*   那么可以使用如下命令，将包开路到devDependencies节点中：
*       //安装指定的包，并记录到devDependencies节点中
*       npm i 包名 -D
*       注意上述命令是简写形式，等价于下面完整的写法：
*       npm install 包名  --save-dev
*
*
* */































