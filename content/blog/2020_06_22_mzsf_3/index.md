---
title: "【每周算法】(双指针遍历篇)：最接近的三数之和"
date: 2020-6-22 18:00:00
tags:
  - javascript
topImg: 2020-06-22.png
description: "来自 一个歪卜 公众号文章，欢迎大家在文章下方评论区评论，也可以写出下周题目的解题思路哦～"
---

![](../../assets/top_image/2020-06-22.png)

又是新的一周，这次的题目也是一道双指针遍历题，如果大家学会了上周题目的解法，那这次的题目应该也会做的很轻松吧？

如果还不知道怎么做？也没关系，这次我们会再做一遍，巩固加深对此类题目的映象，一题不行，咱就做两题，两题不行就做三题，努力总是会超越天才的！

## 【每周算法】(双指针遍历篇)：最接近的三数之和

给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。

**注意：假定每组输入只存在唯一答案。**

```JavaScript
// 举个🌰
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
var threeSumClosest = function(nums, target) {
	// ...
};
```

## 解答过程

### 解法1

### 双指针遍历法：还是熟悉的配方熟悉的味道

```JavaScript
var threeSumClosest = function(nums, target) {
	const len = nums.length
	nums.sort((a,b)=>a-b) // 排序
	if(len<3) return null
	if(len==3) return nums[0]+nums[1]+nums[2]
	
	let res = nums[0]+nums[1]+nums[2]
	for(let i=0;i<len;i++){
		let L = i+1
		let R = len - 1
		while(L<R){
			const sum = nums[i]+nums[L]+nums[R]
			if(sum < target) L++
			else if(sum > target) R--
			else if(sum == target) return sum
			if(Math.abs(target-sum) < Math.abs(target-res))
				res = sum
		}
	}
	return res
};
```

- 执行用时 :76 ms, 在所有 JavaScript 提交中击败了88.07%的用户
- 内存消耗 :36.4 MB, 在所有 JavaScript 提交中击败了10.00%的用户

## 下周题目

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

```JavaScript
// 举个🌰
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

var lengthOfLongestSubstring = function(s) {
	// ...
};
```