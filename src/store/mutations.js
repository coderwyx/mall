export default  {
  addCounter(state,payload){
    payload.count ++
  },
  addToCart(state,payload){
   state.cartList.push(payload)
  },
  changeCheck(state,payload){
    payload.isCheck = !payload.isCheck
  },
  cancelAllCheck(state,payload){
    payload.forEach(item => {
      item.isCheck = false;
    });
  },
  allCheck(state,payload){
    payload.forEach(item => {
      item.isCheck = true;
    });
  }
}