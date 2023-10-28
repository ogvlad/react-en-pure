function debounce(func: any, wait: any) {
  let timeout: any
  return function (...args: any[]) {
    const context = this
    clearTimeout(timeout)  // Очищаем предыдущий таймер
    timeout = setTimeout(() => {
      func.apply(context, args)  // Вызываем функцию после задержки
    }, wait)
  }
}

function throttle(func: any, limit: any) {
  let inThrottle: any
  return function () {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const Utils = {
  debounce,
  throttle,
}