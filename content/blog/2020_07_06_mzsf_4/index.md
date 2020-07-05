---
title: "【每周算法】(双指针遍历篇)：长度最小的子数组"
date: 2020-7-6 18:00:00
tags:
  - javascript
  - 每周算法
topImg: gzh-mzsf.png
description: "来自 一个歪卜 公众号文章，欢迎大家在文章下方评论区评论，也可以写出下周题目的解题思路哦～"
---

![](https://static01.imgkr.com/temp/19d08d7dc7e54c848b4116752afe74d4.png)

本周是 双指针遍历篇 的第三题，注意：这道题目和我们之前的做法不大一样，之前的题目是逆向的双指针解法，而这道题目：是同向的双指针解法，又名**滑块窗口法**。那么滑块法和普通的双指针遍历有什么区别呢？大家请看图：

![](https://static01.imgkr.com/temp/093c0df0175249b3ac83ccd21cef64ba.png)

这里先来解释一下上面的图。

- 逆向双指针：由图可知，逆向双指针是在for循环中，通过 L和R**两个指针**反方向遍历数组（while循环），最终L和R相遇进行第二次for循环，以此类推来操作数组的。
- 滑块窗口：而滑块窗口遍历，是for循环中，通过**一个指针**、和for循环中的i，以相同的方向遍历数组来完成数组的操作。同时，row和i就好像是一个长度可变滑块一样，操作滑块中的数据，故名为滑块遍历法

好了，前置知识解释完毕，如果还不是很理解没有关系，我们做完这题后，相信一定可以对该方法有所了解！

## 【每周算法】(双指针遍历篇)：长度最小的子数组

给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

```JavaScript
// 举个🌰
输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
var minSubArrayLen = function (s, nums) {
  // ...
};
```

## 解答过程

### 维护数组 的滑块遍历

这是我首先能想到的方法，因为题目是要找的是长度最小的子数组，所以索性就来构造这么一个数组arr，然后用 min 来存储数组的长度，并对每次满足条件的数组长度进行比对 _(满足数组之和sum ≥ s的while循环)_，最终得到最小的min。

因为题目要求当不符合条件时返回0，但是如果直接把min设置为0的话，进行比对会有问题。所以将其初始值设为nums.length + 1，这样如果数组满足条件，则min一定会小于nums.length+1，故最后return结果时通过min是否等于nums.length+1进行判断即可。

整个思路流程如图所示：

![](https://static01.imgkr.com/temp/5453d42338ce444b917e997820fc06db.png)

```JavaScript
var minSubArrayLen = function (s, nums) {
  let arr = []
  let len = nums.length
  let min = len + 1
  let sum = 0
  for (let i = 0; i < len; i++) {
    arr.push(nums[i])
    sum += nums[i]
    while (sum >= s) {
      sum -= arr[0]
      min = Math.min(arr.length, min)
      arr.shift()
    }
  }
  return min == len + 1 ? 0 : min
};
```

- 执行用时：80 ms, 在所有 JavaScript 提交中击败了38.12%的用户
- 内存消耗：36.5 MB, 在所有 JavaScript 提交中击败了25.00%的用户

这样我们就成功的解出了这道题目，但是执行时间和内存消耗看起来都不尽人意...所以，我们来想办法优化一下这个算法：

既然我们可以通过保存数组的形式来计算出长度最小的数组，而且arr数组是nums数组连续的一段。那么，能不能通过保存数组下标的形式来计算呢？用一个变量row来保存数组的下标，毕竟操作数组的性能肯定比不上直接操作变量！

### 维护下标 的滑块遍历

答案当然是可以的，我们把上面的arr数组改成row变量，用变量row来存储上面arr的初始位置、i为arr的结束位置，这样就能省去对数组的push和shift操作了：

```JavaScript
var minSubArrayLen = function (s, nums) {
  let row = 0
  let len = nums.length
  let min = len + 1
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    // arr.push(nums[i]) 在这里等同于i++
    while (sum >= s) {
      sum -= nums[row]
      min = Math.min(i-row+1, min)	// arr.length等同于i-row+1
      row++ // arr.shift() 等同于 row++
    }
  }
  return min == len + 1 ? 0 : min
};
```

- 执行用时：60 ms, 在所有 JavaScript 提交中击败了98.25%的用户
- 内存消耗：35.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户

简单解释下代码：

解法一的 **arr<:array>** 在这里替换成了 **row<:int>**，因为**arr**本身结束位置就和**nums**遍历的进度保持一致，所以 **i** 就可以当作解法一中arr的结束下标，**row**当作**arr**的起始下标，所以解法一中的**push**等同于**i++**，可以省去，**shift**方法等同于**row++**。


## 下周题目

下周我们继续做一道滑块遍历的题目，来巩固一下本节所学的知识。希望大家也能用今天学到的方法来解答出该题：

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

本题来自leetcode第3题，欢迎留言并写出你的解法，我会在下周进行解答哦！