---
title: "【每周算法】(双指针遍历篇)：环形链表"
date: 2020-7-20 8:00:00
tags:
  - javascript
  - 每周算法
topImg: gzh-mzsf.png
description: "来自 一个歪卜 公众号文章，欢迎大家在文章下方评论区评论，也可以写出下周题目的解题思路哦～"
---

本周是双指针遍历篇的第三种（也是最后一种解题方法），快慢指针！

什么是快慢指针呢？能解决什么样得到问题呢？



## 【每周算法】(双指针遍历篇)：环形链表

>leetcode 141 题：环形链表
>https://leetcode-cn.com/problems/linked-list-cycle/

给定一个链表，判断链表中是否有环。

```JavaScript
输入： 1 => 2 => 3 => 4 => 2
输出： true

输入：1 => 2 => 3 => 4
输出：false

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {};
```

## 解答过程

### 节点标记法

最先想到的基础方法，不需要任何前置知识：

我们只需要遍历这个链表，在遍历过的时候给节点打一个tag，这样，如果遍历到循环结束，那该链表自然不是环形链表。

反之，如果我们遍历的时候遇到了tag，则说明我们之前也遇到过它，所以我们已经进入了环中！故`return true`

```javascript
var hasCycle = function(head) {
    while(head) {
        if(head.tag) return true
        head.tag = true
        head = head.next
    }
    return false
};
```

### hash法

```javascript
var hasCycle = (head) => {
  let map = new Map()
  while (head) {
    if (map.has(head)) return true
    map.set(head, true)
    head = head.next
  }
  return false
}
```

### 快慢指针

```javascript
var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head
    let fast = head.next
    while(slow != fast){
        if(!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
};
```

## 最后

这是双指针遍历篇的最后一篇文章了，至此这种解题方法的三种常见题型我们也都做过啦。后面我会对前面的文章中的对撞指针、滑块指针、快慢指针的题型做一篇总结，再复习一次，同时综合的再讲解一遍。

另外，自己在公众号的创作也有一个月了，最近在思考每周算法的写作模式是否适合这个平台，应该会做一次创作模式的小改变，但是依旧会保持每周至少一篇的内容输出，和大家共同学习前端的方方面面、拭目以待吧！
