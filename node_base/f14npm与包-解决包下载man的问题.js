/*
*   接f13。
*   解决下包速度慢的问题。
*   下包慢的原因是因为下载包默认是从国外的服务器下载(https://registry.npmjs.org)，所以速度很慢
*   此时可以使用国内的淘宝镜像作为下载源，这样速度会大大提高。
*
*   切换npm的下包镜像源
*       下包的镜像源，指的就是下包的服务器地址。
*       1.查看当前的下包镜像源
*       npm config get registry
*       2.将下包的镜像切换为淘宝镜像源
*       npm config set registry=https://registry.npm.taobao.org/
*       3.检查镜像是否下载成功
*       npm config get registry
*
*
*
*   为了方便的切换下包的镜像源，我们可以安装nrm这个小公举，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源
*   通过npm包管理器，将nrm安装为全局可用的工具
*   npm i nrm -g
*   查看所有可用的镜像源
*   nrm ls
*   将下包的镜像源切换为 taobao 镜像
*   nrm use taobao
*
*
*
*
*
*
*
* */