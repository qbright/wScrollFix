# wScrollFix
微信浏览器滚动上下黑边解决方案

###安装方式 
1. 通过`npm`安装 `npm i wscrollfix`
2. 直接下载代码库，引用`./dist/wScrollFix.js`文件

如果是直接下载引用，会向全局暴露`wScrollFix`方法

###使用方法

`wScrollFix(element,[isAsyncLoadList])`

其中`element`为滚动元素对象或者是一个选择器
`isAsyncLoadList`标识是否滚动元素列表为异步加载，默认为`false`

对于容器样式有些要求，具体可以在`example`文件夹例子中找到

