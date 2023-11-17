import { createSlice ,current} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
    const { name } = action.payload;
    console.log(name);
    //console.log(current(state));
    //const existingItem = state.items.find((item)=>item.card.info.name === name);
    const existingItem = state.items.find((item)=>{
      console.log(item.card.info.name);
      return item.card.info.name === name
    });
    if(existingItem){
        existingItem.quantity += 1; 
        //existingItem.price ? state.sum+=existingItem.item.card.info.price : state.sum+=existingItem.defaultPrice;
    }else{
        state.items.push({...action.payload,quantity:1,sum:0});    
        //action.payload.price ? state.sum+=action.payload.price : state.sum+=action.payload.defaultPrice;
    }
    },
    removeItem: (state, action) => {
      const {itemId}=action.payload;
      console.log(itemId);
      const index = state.items.findIndex(item => item.card.info.id === itemId);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const itemToIncrease = state.items.find(item=>item.card.info.id === itemId);
      // console.log(itemId);
      // console.log(current(state));
      // console.log(current(itemToIncrease));
      if (itemToIncrease) {
        itemToIncrease.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const itemToDecrease = state.items.find(item => item.card.info.id === itemId);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
