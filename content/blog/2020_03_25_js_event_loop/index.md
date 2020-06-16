---
title: 10分钟了解浏览器的Event Loop
date: 2020-3-25 18:00:00
tags:
  - web
  - javascript
  - node
---

## 什么是 Event Loop

因为一定的历史原因，JavaScript 是一种运行在浏览器的语言，而 run in Browser 最重要的就是减少语言的运行成本，因为 js 的设计起初是为了操作浏览器 dom，如若设计成多线程必然会引起文件操作的资源竞争
**Event Loop** 是一种解决浏览器单线程阻塞的解决方案，也叫做异步处理

## 了解 Event Loop 的前置知识

### 栈 与 队列

因为只是内容偏基础，这里不做过多介绍，如果不了解的话你可以看下[这篇文章](https://www.cnblogs.com/sang-bit/p/11757553.html)

### 宏任务（MacroTask）与 微任务（MicroTask）

由于 js 是单线程语言，所以通过异步的方式解决阻塞问题。故其除了有主执行栈外，还有一个宏任务队列与微任务队列。

1. 当**主执行栈**代码执行完毕后，浏览器会检查**微任务队列**中的内容，当**微任务队列**存在任务片段时，插入主栈，直到内容为空，
2. 此时会检查**宏任务队列**，当**宏任务队列**存在任务片段时，插入主栈，
3. 然后再检查**微任务队列**，以此反复循环。

以下是浏览器分配任务原则

- **宏任务**：包括 js 基本代码、setTimeout、setInterval
- **微任务**：Promise

## 浏览器中的 Event Loop

通过一个简单的 🌰，就能很直观的看出浏览器的 Event Loop 策略

```javascript
setTimeout(function() {
  console.log("setTimeout1")
  Promise.resolve().then(function() {
    console.log("promise1")
  })
}, 0)

setTimeout(function() {
  console.log("setTimeout2")
  Promise.resolve().then(function() {
    console.log("promise2")
  })
}, 0)

// setTimeout1，promise1，setTimeout2，promise2，
```

这是图例
![图片](./1.gif)

如果你想深入了解 浏览器 或者 nodejs 的事件轮询机制，可以阅读[这篇文章](https://juejin.im/post/5c3d8956e51d4511dc72c200?utm_source=gold_browser_extension#heading-7)
