export default {
  addCart(context, payload) {
   return new Promise((resolve,reject)=>{
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    if (oldProduct) {
      context.commit('addCounter', oldProduct)
      resolve('添加商品数量')
    } else {
      payload.count = 1
      payload.isCheck = true
      resolve('添加到购物车成功')

      context.commit('addToCart', payload)
    }
   })
  }
}