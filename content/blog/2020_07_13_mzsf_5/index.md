---
title: "【每周算法】(双指针遍历篇)：无重复字符的最长字串"
date: 2020-7-13 18:00:00
tags:
  - javascript
  - 每周算法
topImg: gzh-mzsf.png
description: "来自 一个歪卜 公众号文章，欢迎大家在文章下方评论区评论，也可以写出下周题目的解题思路哦～"
---

本周我们继续做的依然是一道**滑块指针**的题目，巩固上周所学。这次的题目和上周题目大同小异，但是由于从遍历数组转换成了遍历字符串，便有了更多的解法！

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


前两种方法和上周近乎相同，由于上次的题目我已经说的很详细了，这次就不再赘述，这里我们重点看第三种解法！

### 维护Map 的滑块遍历


## 下周题目

