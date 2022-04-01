import produce from 'immer'

const initState = {
  shops: [],
  accounts: []
}

const manage = produce((draf, action) => {
  switch (action.type) {
    case 'GET_ACTIVE_SHOPS': 
      draf.shops = action.payload;
      break;
    case 'UPDATE_ACTIVE_SHOP':
      const index = draf.shops.findIndex((shop) => shop.shop_id == action.payload.shop_id);
      if (action.payload.active_levera_pay) {
        if (index == -1) {
          draf.shops.unshift(action.payload);
        }
      } else {
        if (index != -1) {
          draf.shops.splice(index, 1)
        }
      }
      break;
    case "GET_ACCOUNTS":
      draf.accounts = action.payload;
  }
}, initState)

export default manage;