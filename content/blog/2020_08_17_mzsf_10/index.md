---
title: "【动图算法】(链表篇)：删除链表节点"
date: 2020-8-17 8:00:00
tags:
  - javascript
  - 每周算法
topImg: gzh-mzsf.png
description: "来自 一个歪卜 公众号文章，欢迎大家在文章下方评论区评论，也可以写出下周题目的解题思路哦～"
---

![](1.jpg)

做为链表篇的结尾：这次做两道可进行对比的经典题型：

- 删除链表的节点
- 删除链表的倒数第 N 个节点

由于单链表的遍历方向不可逆，所以相似的两道题目解法却不尽相同

## 【动图算法】(链表篇)：删除链表的节点

> 剑指 Offer 18 题：删除链表的节点  
> https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

```JavaScript
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

## 解答过程

**该题难度不高，通过正向遍历即可**

### 直接遍历法

```JavaScript
var deleteNode = function (head, val) {
    // 如果删除节点是头节点直接返回next
    if (val === head.val) {
        return head.next
    }
    let arrow = head
    // 循环得到需要删除的节点时改变指针的指向即可
    while (arrow.next) {
        if (arrow.next.val === val) {
            arrow.next = arrow.next.next
            break
        }
        arrow = arrow.next
    }
    return head
};
```

### 递归法

对解法1的优化，利用了链表指针是修改内存地址指向的特点～

```JavaScript
var deleteNode = function (head, val) {
    if (head.val === val) {
        return head.next
    }
    head.next = deleteNode(head.next,val)
    return head
};
```

- 进入函数判断是否是需要删除的节点，若是，则返回下一个节点
- 进入递归，判断是否是需要删除的节点，若是，则将需要删除节点的下一个节点返回，这样上一个节点的next指向的就是需要删除节点的下一项，即完成了删除～

## 【动图算法】(链表篇)：删除链表的倒数第 N 个节点

> leetcode 19 题：删除链表的倒数第 N 个节点  
> https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

**说明：给定的 n 保证是有效的。**

```JavaScript
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

## 解答过程


### hash 法

由于链表遍历不可逆，可以通过Map对遍历的每一项内容进行存储，然后查找需要删除的节点

```JavaScript
var removeNthFromEnd = function (head, n) {
    if (!head.next) return null
    let hashMap = new Map()
    let i = 0
    let res = head
    // 遍历并存储
    while (head && ++i) {
        hashMap.set(i, head)
        head = head.next
    }
    
    let del = hashMap.get(i - n)
    if (n == i) res = res.next
    else del.next = del.next.next
    return res
};
```

### 快慢指针

```JavaScript
var removeNthFromEnd = function (head, n) {
    let fast = head,slow = head
    while(n--) fast = fast.next
    if(!fast) return head.next
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return head
}
```

## 最后 🔚

链表篇的题目至此就结束了，在这里总结一下该类题型的特点：

- 单链表只能单向遍历，不可逆
- 在js中链表是一个对象，修改其指针值实际是修改了指针所指的地址
- 常见的链表题型考察的基本都是上面的两个点，大多题型可以通过快慢指针或者hash存储的方式来完成解答



