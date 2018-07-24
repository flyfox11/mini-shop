# mini-shop

> a mini project for shopping

## 技术栈
- [x] 框架 -- mpvue
- [x] 样式 -- less
- [x] js -- ES6/7
- [x] 接口请求 -- flyio
- [x] 状态管理 -- vuex
- [x] 语法检查 -- eslint

## 目录结构介绍 ##
	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|   |-- components                   // 公共组件
	|   |-- pages                        // 相关页面
	|   |-- store                        // 状态管理
	|   |-- styles                       // 公共样式
	|   |-- utils                        // 工具文件
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- static                           // 静态资源文件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
  |-- .eslintignore                    // 代码检查忽略配置
	|-- .gitignore                       // git忽略的文件
	|-- .postcssrc.js                    // post-loader的插件配置文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- project.config.json              // 小程序相关的项目配置
	|-- README.md                        // 说明
  |-- .eslintignore                    // 代码检查忽略配置
	|-- .eslintrc.js                     // 检查配置文件
  |-- package-lock.json                // 项目固定依赖配置文件

## 项目运行

``` bash
# 安装依赖
npm install

# 编译代码
npm run dev

# 在微信开发者工具打开上一步编译好的dist文件
