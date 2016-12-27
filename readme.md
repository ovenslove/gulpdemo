# gulpdemo - 初始化的开发环境

日常开发中，传统的html,css,js开发模式已经组件被新的语言或者框架代替，本demo中主要使用jade/pug,sass,js(es5)，于此同时，还引入了vue框架和浏览器自动刷新browser-sync。使用json-server增加模拟数据的支持，在后期，将会添加对typeScript的支持。本demo旨在快速提供一个开发环境，减少搭建开发环境的过程，加快开发速度，本demo中还存在一些小问题，将会在后期进行修复，现阶段不影响使用。

## 安装

```
git clone git@github.com:ovenslove/gulpdemo.git
cd gulpdemo
cnpm install /yarn add package.json / npm install (速度慢) [三种方式任选其一]
```

## 启动

> 执行gulp命令，即可打开浏览器(具体配置请参考browser-sync的配置方式)

```
gulp
```

## 模拟数据

> 开发中经常会与后台同步开发，所以，就需要使用模拟数据进行数据对接，因此，新建或者修改data/data.json。

```
cnpm install -g json-server
cd data
json-server data.json -p 3033
```

## 文件结构

```
data                      模拟数据文件夹
  |—— data.json           数据json文件
dist                      gulp输出文件夹
  |—— css                 css文件夹（sass编译后文件）
       |—— style.css
  |—— images              images文件夹（imagemin压缩后的文件）
       |—— mylogo.png
  |—— js                  js文件夹（混淆压缩后的文件夹）
       |—— main.js
       |—— main.min.js
  |—— view                html文件夹（pug编译之后的文件）
       |—— index.html
node_modules
  |—— 安装的依赖包
src                       gulp源文件文件夹
  |—— sass                sass文件夹
       |—— style.scss
  |—— images              iamges图片文件夹
       |—— mylogo.png
  |—— js                  js文件夹
       |—— mylogo.png
  |—— view                pug文件夹
       |—— includes       pug内通用类文件夹
              |—— layout.pug
       |—— index.pug
.gitignore                git提交时的忽略配置文件
.sass-lint.yml            atom-sass 语法检查的配置文件
gulpfile.js               gulp的配置文件
package.json              包管理配置文件
readme.md                 项目声明文件
```

## 使用前提条件

- html/css/js基础
- sass/scss基础语法
- pug基础语法
- nodejs基础
- git 基础
- vue基础（可选）

## 没问题？开撸吧！

## 可不可以帮我点个免费的星星（star）@_@!!!
