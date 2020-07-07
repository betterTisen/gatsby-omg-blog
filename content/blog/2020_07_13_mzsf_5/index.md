---
title: "【每周算法】(双指针遍历篇)：无重复字符的最长字串"
date: 2020-7-13 8:00:00
tags:
  - javascript
  - 每周算法
topImg: gzh-mzsf.png
description: "来自 一个歪卜 公众号文章，欢迎大家在文章下方评论区评论，也可以写出下周题目的解题思路哦～"
---

![](https://imgkr.cn-bj.ufileos.com/5bd88efc-8ab4-4c59-a52c-c594f959527e.jpg)

>本周我们继续做的依然是一道**滑块指针**的题目，巩固上周所学。这次的题目和上周题目大同小异，但是由于从遍历数组转换成了遍历字符串，便有了更多的解法！

## 【每周算法】(双指针遍历篇)：无重复字符的最长字串

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

```JavaScript
// 举个🌰
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 🌰🌰
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 🌰🌰🌰
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

var lengthOfLongestSubstring = function(s) {
  // ...
}
```

## 解答过程

### 维护数组 和 维护下标 的滑块遍历

前两种方法和上周近乎相同，由于上次的题目我已经说的很详细了，这次就不再赘述。

```JavaScript
// 维护数组
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    let max = 0
    let newArr = []
    for(let i = 0;i<len;i++){
        const hasNum = newArr.indexOf(s[i])
        if(hasNum != -1){
            newArr.splice(0,hasNum+1)
        }
        newArr.push(s[i])
        max = Math.max(max,newArr.length)
    }
    return max
};

// 维护下标
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    let max = 0
    let arrIdx = 0
    for(let i = 0;i<len;i++){
        const idx = s.substring(arrIdx,i).indexOf(idx[i])
        if(idx != -1){
            arrIdx += idx + 1
        }
        max = Math.max(max, i - arrIdx + 1)
    }
    return max
};
```

- 执行用时：100 ms, 在所有 JavaScript 提交中击败了77.41%的用户
- 内存消耗：38.8 MB, 在所有 JavaScript 提交中击败了67.12%的用户

### 维护Map 的滑块遍历

这里我们重点看第三种解法！

```JavaScript
var lengthOfLongestSubstring = function(s) {
    const len = s.length
    let idx = 0, max = 0
    let map = new Map()
    for(let i = 0;i<len;i++){
        if(map.has(s[i]) && idx < map.get(s[i]) + 1){
            idx = map.get(s[i])+1
        }
        map.set(s[i],i)
        max = Math.max(max, i - idx+1)
    }
    return max
};
```

- 执行用时：104 ms, 在所有 JavaScript 提交中击败了67.64%的用户
- 内存消耗：39.4 MB, 在所有 JavaScript 提交中击败了64.38%的用户

前面我们通过维护数组和下标来存储字符串长度状态，但是这里我们选择用Map来维护：

*Map的特性就是可以在数组单次循环的时候通过Map.set(v,k)方法缓存数组的状态*，

所以在未来如果遇到这种可以通过存储数组状态所完成的问题，都可以尝试通过Map存储的方式来完成。

如果对这种解法看的不是很明白，我画了这张动图向大家再演示一下：

![](https://imgkr.cn-bj.ufileos.com/d1b33e47-60a8-4609-bf57-b1d0f21826f4.gif)


## 下周题目

下周我们就要进入双指针问题的最后一个篇章【快慢指针】。在这之前，大家可以先了解一下什么是链表、链表的结构是什么样的？

下周题目如下：

给定一个链表，判断链表中是否有环。

```JavaScript
前置知识：ListNode链表结构
{
  val:1,
  // ListNode是下一个链表项的地址，如果链表中无环，则最后一项的 next = null
  next: ListNode
}

// 举个🌰
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