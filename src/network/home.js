import { request } from "./request";

// 获取轮播图和推荐等数据
export function getHomeMulitidata() {
  return request({
    url:'/home/multidata'
  })
}

// 获取商品数据
export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}