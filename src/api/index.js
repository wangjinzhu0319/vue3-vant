import request from '@/router/axios'

// 资产包发行
export const absReqProduct = params => {
  request({
    url: '/crm/absReq/product/issue',
    method: 'get',
    params
  })
}
