## 参考了`github`上各位的项目之代码之后  搭建的基于vue-cli和webpack的项目  引入vux-ui框架
项目参考：https://github.com/bluefox1688/vue-cli-multi-page
首先用`vue-cli`脚手架工具下载`webpack`模版，初始化项目，然后基于生成的项目文件来进行修改。
-------
## 主要配置的文件：
* webpack.base.conf.js 将`webpack`的单入口文件改成多入口，遍历`views`文件夹
* webpack.dev.conf.js 生成多个`html-webpack-plugin`
* webpack.prod.conf.js 生成多个`html-webpack-plugin`