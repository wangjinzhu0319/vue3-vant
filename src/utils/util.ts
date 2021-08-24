import { Toast, ToastType } from 'vant'
// 表单序列化
export const serialize = (data: any) => {
  const list: string[] = []
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`)
  })
  return list.join('&')
}

// 消息通知
export const showLoadingFun = (message = '记载中...') => {
  Toast.loading({
    duration: 0,
    forbidClick: true,
    message: message
  })
}
export const hideLoadingFun = () => {
  Toast.clear()
}

export const toastFun = (message: string, type?: ToastType) => {
  Toast({
    message,
    type: type
  })
}
