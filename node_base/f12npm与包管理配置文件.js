/*
*   接f11.
*   快速创建package.json
*   npm包管理工具提供了一个快捷命令，可以在执行命令式所处的目录中，快速创建package.json这个包管理配置文件：
*       npm init -y;//作用在执行命令所处的目录中，快速新建package.json文件
*       注意：
*           1.上述命令只能在英文的目录下成功运行！所以项目文件夹的名称一定要使用英文命令，不要使用中文，不能出现空格。
*           2.运行npm install命令安装包的时候，npm包管理工具会自动把包的名称和版本号，记录到package.json文件中。
*
*   dependencies节点：
*       package.json文件中，有一个dependencies节点，专门用来记录使用npm install命令安装了那些包
*
*   一次性安装所有的包：
*       如果项目中没有node_modules目录，那么就需要把所有的包下载到项目中，才能使项目运行起来
*       否则会报类似于下面的错误：
*           //由于项目以来于xxx这个包，如果没有提前安装好这个包，就会报如下的错误：
*           Error:Cannot find module 'xxx'
*       针对以上可以运行npm install命令(或npm i)一次性安装所有的以来包
*           //执行npm install命令时，npm包管理工具会先读取 package.json中的dependencies节点，
*           //读取到记录的所有以来包名称和版本号之后，npm包管理工具会把这些包一次性下载到项目中
*           npm install
*
*   卸载包：
*       可以运行npm uninstall 命令，来卸载指定的包
*       npm uninstall 具体的包名  来卸载包
*
* */