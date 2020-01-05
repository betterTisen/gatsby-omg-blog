// 缓动函数
// t 当前时间, b 当前位置, c 目标位置, d 总时间
export function easeInOutCubic(t, b, c, d) {
  // 剩余距离
  const cc = c - b
  // 将时间范围映射到[0, 2]
  t /= d / 2
  // 前半段
  if (t < 1) {
    return (cc / 2) * t * t * t + b
  }
  // 后半段
  // t -= 2 此时 t 范围为[-1, 0]
  // 故 (t -= 2) * t * t 为 y = x^3 曲线的[-1, 0]部分
  return (cc / 2) * ((t -= 2) * t * t + 2) + b
}

// 当前的滚动距离
export function getCurrentScrollTop() {
  return (
    window.pageYOffset ||
    document.body.scrollTop ||
    document.documentElement.scrollTop
  )
}
