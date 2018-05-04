# vue
这是一个vue demo

## vue数据驱动(主要是操作数据)
- 原生DOM jquery(操作DOM 性能低)

## JS的数据类型
- 基本数据类型:number string boolean(true false) null undefined
- 引用数据类型:([],{},...)
- symbol(es6)

## {} []
- 操作数组的方法(括号中的方法能够改变原数组):
- (pop push shift unshift splice reverse sort) slice  indexof concat lastIndexof

## 数组的迭代的方法
- for forEach map(映射) filter(过滤) some every reduce (includes find es6)

## 框架和库
- 框架:拥有一套完整的解决方案 我们按照框架的规则写好了 人家调我们
- 库:jquery zepto animate.css 是我们直接调用他们的方法

## vue是一个渐进式框架(渐进增强)拥有一套完整的体系
- vue全家桶包括: vue.js + vue-router + vuex + axios
- 通过组合 完成一个完整的框架

## MVC(backbone) 单向数据流
- model 数据层
- view 视图层
- controller 控制器

## MVVM(angular vue) 双向数据 响应式的数据变化
- model 数据层
- view 视图层
- view-model 视图模型

## vue中属性用的是Object.defineProperty(es5)的没有替代方案
- 不支持<=ie8

## 安装vue
- cdn的方式: <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
- npm的安装: npm install vue
```
 npm init -y
 npm install vue

```
> npm init -y 会产生项目依赖的包package.json


