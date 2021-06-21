export default {
  addCart(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    if (oldProduct) {
      context.commit('addCounter', oldProduct)
    } else {
      payload.count = 1
      payload.isCheck = true

      context.commit('addToCart', payload)
    }
  }
}