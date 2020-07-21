---
title: "【每周算法】双指针算法各类题型总结"
date: 2020-7-27 8:00:00
tags:
  - javascript
  - 每周算法
topImg: gzh-mzsf.png
description: "来自 一个歪卜 公众号文章，欢迎大家在文章下方评论区评论，也可以写出下周题目的解题思路哦～"
---

![](https://imgkr.cn-bj.ufileos.com/d7679e87-273e-4610-9b81-75f3eca3c485.jpg)

双指针，顾名思义，就是利用两个指针去遍历 数组 & 链表 & 字符串，以达到所需实现的目标。

一般情况下，对于遍历数组只需要单个指针即可完成，但是在某些复杂情况下，用两个指针来操作数据会更为快捷、高效。以下我会详细介绍、对比三种常见的双指针题型算法，希望大家在阅读完之后对该类型的题目能有深刻的认识！

## 对撞💥指针

对撞指针用于解决已排序的数组问题，通过两条指针反方向遍历直至两条指针相交，同时操作数组中的两条数据，达到减少循环层数、降低时间复杂度的目的。

对撞指针遍历一般是在有序数组中使用，一个放首，一个放尾，同时向中间遍历，直到两个指针相交，完成遍历。

### 基本特点

- 对撞指针从两端向中间迭代数组。一个指针从始端开始，另一个从末端开始。
- 对撞指针的终止条件是两个指针相遇。
- 对撞指针用于已排序的区间

### 何时使用

- 可用于你要处理排序数组（或链接列表）并需要查找满足某些约束的一组元素的问题
- 数组中的元素集是配对、三元组甚至子数组

### 例题：三数之和

>leetcode 15 题：三数之和
>https://leetcode-cn.com/problems/minimum-size-subarray-sum/

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

**注意：答案中不可以包含重复的三元组。**

```javascript
//举个🌰
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

###  动图&代码

![该图字体较小，建议在电脑查看～](https://imgkr.cn-bj.ufileos.com/e6efd35b-2d90-43dd-8ae0-4a8cdac1b800.gif)

```javascript
var threeSum = function(nums) {
  let res = [];
  if(nums == null || nums.length < 3) return res;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < nums.length-2 ; i++) {
    if(nums[i] > 0) break; 
    if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
    let L = i+1;
    let R = nums.length-1;
    while(L < R){
      const sum = nums[i] + nums[L] + nums[R];
      if(sum == 0){
        res.push([nums[i],nums[L],nums[R]]);
        while (L<R && nums[L] == nums[L+1]) L++; // 去重
        while (L<R && nums[R] == nums[R-1]) R--; // 去重
        L++;
        R--;
      }
      else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }        
  return res;
};
```

- 根据对撞指针用于已排序的区间，首先对数组进行排序
- 进入循环
- 如果 `nums[i] + nums[L] + nums[R] >0`, 说明三数之和大于0， L向右移一位使三数之和变大
- 如果·`nums[i] + nums[L] + nums[R] <0`, 说明三数之和小于0， R向左移一位使三数之和变小
- 如果 `nums[i] + nums[L] + nums[R] =0`, 说明三数之和等于0，此时就是我们需要的答案，所以将这三个数push到res当中
- 如果 L>=R，则证明双指针遍历完成，跳出while循环，进入第二层for循环
- 当for循环遍历完成后输出满足条件的数组



## 滑块🧊指针

滑动指针算法思想可以用来解决数组&字符串的子元素等问题。它将嵌套循环的问题，转换为单层循环问题，降低时间复杂度，提高效率。

它将两个指针的区间范围当作一个滑块，然后将这个窗口在数组上滑动。在窗口滑动的过程中，左边会出一个元素，右边会进一个元素，然后计算对比当前窗口内的元素即可。

### 基本特点

- 滑块指针从同一端开始，以相同的方向运动
- 用来解决一些查找满足一定条件的连续区间 或 长度 的问题
- 窗口只能由左向右滑动，不能逆过来滑动。就是说，窗口的左右边界，只能从左到右增加，不能减少

### 何时使用

- 问题的输入是一种线性数据结构，比如链表、数组或字符串
- 你被要求查找最长/最短的子字符串、子数组或所需的值

### 例题：长度最小的子数组

>leetcode 209 题：长度最小的子数组
>https://leetcode-cn.com/problems/minimum-size-subarray-sum/

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

###  动图&代码

![](https://pic.leetcode-cn.com/778ebc6f0d1a8433b04c8ca78857a86e6e9a03f5993932440e1d6fdb6c76e595.gif)

```javascript
var minSubArrayLen = function (s, nums) {
  const len = nums.length
  let arr = []
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

构造数组arr，然后用 min 来存储数组的长度，并对每次满足条件的数组长度进行比对 (满足数组之和sum ≥ s的while循环)，最终得到最小的min。


## 快慢🐢🐰指针

快慢指针常用于处理数据的追击问题，两个指针进行同向运动，但是运动速度一快一慢，如果处理的数据出现循环时，快速指针🐰必将与慢速指针🐢相遇。

### 基本特点

- 快慢指针在同一端开始、往相同方向运动、并以两指针相交 或 单指针遍历完成结束
- 快慢指针常用于处理链表或数组中的循环的问题、找链表中点或需要知道特定元素的位置

### 何时使用

- 处理链表或数组中的循环的问题
- 当你需要知道特定元素的位置或链表的总长度

### 例题：环形链表

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

### 动图&代码

![](https://cdn.byeguo.cn/gzh/blog/2020_07_20_mzsf_6/2.gif)

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

定义两个变量（slow、fast指针）开始循环，快指针的速度是慢指针的两倍，所以当他们相遇时，则链表中存在环，或者快指针走到终点，说明链表无环。

## 参考文章

>准备程序员面试？你需要了解这 14 种编程面试模式
>https://zhuanlan.zhihu.com/p/68916567