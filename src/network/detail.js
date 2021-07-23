import { request } from './request';

//请求商品详细数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//请求商品推荐数据数据
export function getRecommend() {
  return request({
    url: '/recommend',
   
  })
}

// 商品信息数据
export class Goods {
  constructor(itemInfo, columns, services) {
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
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class ShopParams {
  constructor(itemParams) {
    this.set = itemParams.info.set;
    this.rule = itemParams.rule.tables;
    this.disclaimer = itemParams.rule.disclaimer;
  }
}