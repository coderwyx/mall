import {request} from './request';

//请求商品详细数据
export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

// 商品信息数据
export class Goods{  
  constructor(itemInfo,columns,services){
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.realPrice = itemInfo.lowNowPrice;
  }
}