#小车 —— Vue UI组件

[![Build Status](https://travis-ci.com/lixiaolei90/littlecar.svg?branch=master)](https://travis-ci.com/lixiaolei90/littlecar)

## 介绍
UI框架练习
## 开始使用

1. 添加CSS样式<br>
    本框架在CSS中开启border-box
    
    ```
    *, *::before, *::after｛box-sizing: border-box;｝
    ```
    IE8及以上浏览器支持<br>

    你还需要设置默认颜色等变量

    ```
    :root {
        --button-height: 32px;
        --button-bg: white;
        --button-active-bg: #eee;
        --font-size: 14px;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
            }
    ```
    IE15及以上浏览器支持
2. 安装littlecar
    ```
    npm i --save littlecar
    ```
3. 引入littlecar
   ```
    import {Button, ButtonGroup, Icon} from 'littlecar'
    import 'littlecar/dist/index.css'

    export default {
    name: 'App',
    components: {
    HelloWorld,
    'l-button': Button,
    'l-icon':Icon,
    'l-button-group':ButtonGroup
    }
   ```
## 文档
## 提问
## 变更方式
## 联系方式
## 贡献代码
