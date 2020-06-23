---
title: "【每周算法】(双指针遍历篇)：最接近的三数之和"
date: 2020-6-29 18:00:00
tags:
  - javascript
topImg: 2020-06-22.png
description: "来自 一个歪卜 公众号文章，欢迎大家在文章下方评论区评论，也可以写出下周题目的解题思路哦～"
---
![](https://imgkr.cn-bj.ufileos.com/c9481aef-7992-455a-8a77-cc5862e5c0c7.png)

又是新的一周，这次的题目也是一道双指针遍历题，如果大家学会了上周题目的解法，那这次的题目应该也会做的很轻松吧？

当然，本题看题目标题就知道和我们上周的题目大致相同，所以，我们这周就不再赘述 多重·for·影分身 这种禁术解法了，直奔我们的主题，双指针遍历～

如果还不知道怎么做？也没关系，这次我们会再做一遍，巩固加深对此类题目的映象，一题不行，咱就做两题，两题不行就做三题，努力总是会超越天才的！

![](https://imgkr.cn-bj.ufileos.com/4ce7cf9a-0ce4-4f00-b08d-0cd0cb17df3d.jpeg)

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

### 双指针遍历法：还是熟悉的配方熟悉的味道

利用前篇文章的所学知识，其实很容易就能解出这道题目：

- 首先将数组排序，然后在for循环中建立L和R两个变量指针。
- 再建立while循环，而后在while循环中处理 i、L、R三者下标所对应的数组值关系。
- 把三数只和与res进行对比，并把较小的值赋给res。
- 最终遍历完成时输出即可

```JavaScript
var threeSumClosest = function(nums, target) {
	const len = nums.length
	nums.sort((a,b)=>a-b) // 排序
	// 定义变量res 并赋一个初始值
	let res = nums[0]+nums[1]+nums[2]
	// 主循环
	for(let i=0; i<len; i++){
		// 定义双指针
		let L = i+1
		let R = len - 1
		// 双指针遍历·启动！
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

### 代码优化

因为有了前一题的基础，我们这次直接开门见山的使用了上次所学的双指针遍历法完成了这道题，但是这还不够完美，它其实还有优化的空间，所以接下来，我们会对上面的代码进行优化，以提升一定的性能（PS：好的算法都是一步步优化而得来的～）

```JavaScript
var threeSumClosest = function(nums, target) {
	const len = nums.length
	nums.sort((a,b)=>a-b)
	// 添加len<=3的处理方式，减少逻辑判断
	if(len<3) return null
	if(len==3) return nums[0]+nums[1]+nums[2]
	let res = nums[0]+nums[1]+nums[2]
	// 因为一共有三个指针，所以i遍历至len-2即可
	for(let i=0; i<len-2; i++){
		// 这里添加了去重处理
		if (i > 0 && nums[i] === nums[i - 1]) continue
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
- 内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了30.00%的用户

到这里已经优化完成了，如果你们觉得本段代码还有改进空间或者有更好的优化方案，也欢迎点击下面的阅读原文在下面的评论给我留言～～

![](https://imgkr.cn-bj.ufileos.com/e9c38534-9c1b-4d58-abc6-ed9a5a6a60e2.jpg)

## 下周题目

下周依然是一道双指针遍历题，不过该题可是有多种解法的，各位可以先看看自己能想出来几种呢？

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
进阶: 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

本提来自leetcode第209题，欢迎留言并写出你的解法，我会在下周进行解答哦！