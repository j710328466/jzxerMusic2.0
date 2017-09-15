import originJsonp from 'jsonp'

export default function jsonp (url, data, option) {
  // 只需要一个问号，其他全是&符号
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// data 即是传入进来的一些json数组
export function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    // 进行编码，让它以 %3%2 类似的形式存在
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  // 删除第一个 url的&
  return url ? url.substring(1) : ''
}
