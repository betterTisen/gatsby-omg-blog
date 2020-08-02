---
title: "【动图算法】(链表篇)：反转链表"
date: 2020-8-02 8:00:00
tags:
  - javascript
  - 每周算法
topImg: gzh-mzsf.png
description: "来自 一个歪卜 公众号文章，欢迎大家在文章下方评论区评论，也可以写出下周题目的解题思路哦～"
---

![](https://imgkr.cn-bj.ufileos.com/1c6a560a-ffa5-4867-a5e4-c06258bcd973.jpg)

我们知道数组是一种通用的数据结构，能用来实现栈、队列等很多数据结构。而链表也是一种使用广泛的通用数据结构，它同样也可以用来作为实现栈、队列等数据结构，

**除非需要频繁的通过下标来随机访问各个数据，否则很多使用数组的地方都可以用链表来代替。**

本周我们会进入链表篇的学习，我将和大家一起学习常考的链表算法题型。第一道题，是一道经典的链表考法，同样也是阿里一面的笔试题目，我们一起来学习一下吧。

## 【动图算法】(链表篇)：反转链表

> leetcode 206 题：环形链表  
> https://leetcode-cn.com/problems/linked-list-cycle/

实现一个函数，用于反转一个单链表。

```JavaScript
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

/**
 * @param {ListNode} head
 * @return {ListNode} head
 */
var reverseList = function(head) {};
```

**进阶：你可以迭代或递归地反转链表。你能否用两种方法解决这道题？**

## 解答过程

本题的难点是指针的指向问题，要注意：链表中的next 指向的是下一段内存空间的地址！所以对链表的每一步操作都要小心仔细，防止内存指向修改导致结果错误的问题

### 迭代法 ♻️

基础解法，很容易想到。通过一个循环，按部就班的对链表的每项依次进行反转～

![](https://imgkr.cn-bj.ufileos.com/3176d3dd-f5b8-48c3-89a6-dc811981f3ce.gif)

```JavaScript
var reverseList = function(head) {
    let nxt = head
    let pre = null
    while(nxt){
        let cc = nxt.next
        nxt.next = pre
        pre = nxt
        nxt = cc
        // 下面是上面4行代码的简写（es6的解构赋值，简化了多行的赋值代码）
        // [nxt.next, pre, nxt]=[pre, nxt, nxt.next]
    }
    return pre
};
```

- 首先用一个变量缓存原指针的下一个节点
- 然后将原指针的指向反转，赋值给pre指针
- 最后将缓存的变量赋值给原指针

### 递归法1 🐢（尾递归）

由于迭代每一步所做的工作都是重复性的，那么思考一下🤔是否可以找到一个规律，把上面的方法改造成递归呢？

然后便有了如下解法：

```JavaScript
var handleReverse = function(node,list){
    // 进行反转
    let next = list.next 
    let pre = list
    pre.next = node
    // 如果链表遍历结束时return pre
    if(!next) return pre
    // 如果链表遍历未结束则继续反转链表的下一项
    return handleReverse(pre,next)
}
var reverseList = function(head) {
    if(!head || !head.next) return head
    return handleReverse(null,head)
};
```

这里创建了一个`handleReverse`函数，因为原始函数只有一个变量，而只通过一个变量来进行链表反转不太方便，所以对原函数结构进行调整，通过传入`反转过的节点pre`和`未反转的节点next`来对链表结构进行递归操作。

### 递归法2 🐢🐢

既然尾递归可以实现反转链表，那么接下来就尝试通过递归自身来实现呢？

于是便有了这种的解法：

**注意：该解法需要对链表的指针定义有一定的认知，但为了方便大家理解，这里也用一张动图来直观的描述一下。但是建议先看代码再看图片！**

```JavaScript
var reverseList = function(head) {
    if(!head || !head.next) return head
    let next = head.next
    // 这里的next传入的是地址，而非值
    let res = reverseList(next)
    // 进行反转
    next.next = head
    head.next = null
    return res
};
```

以上所有的操作都是对链表的地址进行的，所以在递归中的链表操作，也会对外层函数存在影响，下面看这张图就会明白啦！

![由于图片较长，在手机上可以会字体模糊，建议在电脑查看～](https://static01.imgkr.com/temp/d5389cc5f2354460a114abbcd9113042.gif)

## 最后

这次题目的三种解法中前面两种都很好理解，主要是第三种解法可能会有些绕，大家可以多熟悉一下～当这道题理解透时对js的变量存储机制应该也就掌握了。毕竟如果笔试时写出这样的解法面试官肯定会觉得：卧槽🐂🍺～
