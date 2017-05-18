# B2B-商城系统-H5端

## 需求背景：
> 用服务商的形式对B2B模式进行进一步的探索，需要给没有系统，也没有开发能力的批发商提供一整套解决方案。

## 需求描述：
1. 买家购买支付的时候，有四种支付方式可供选择，且支付方式是可配置的。鉴于目前富友尚未接入，目前仅支持微信支付。
2. 其余关于页面的详细交互见附件，如果有任何问题，请及时沟通处理。

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
  |—— includes       pug内通用类文件夹
      |—— layout.pug
  |—— index.pug
.gitignore                git提交时的忽略配置文件
.sass-lint.yml            atom-sass 语法检查的配置文件
gulpfile.js               gulp的配置文件
package.json              包管理配置文件
readme.md                 项目声明文件
```