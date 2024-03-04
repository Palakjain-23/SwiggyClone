import { createSlice,current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0, // New state to hold the total price
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.card.info.id === action.payload.card.info.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
      }
      state.totalPrice = calculatePrice(state.items); // Calculate total price
      // console.log(current(state));
    },
    increaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const itemToIncrease = state.items.find((item) => item.card.info.id === itemId);
      if (itemToIncrease) {
        itemToIncrease.quantity++;
        state.totalPrice = calculatePrice(state.items); // Recalculate total price
      }
    },
    decreaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const itemToDecrease = state.items.find((item) => item.card.info.id === itemId);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
        state.totalPrice = calculatePrice(state.items); // Recalculate total price
      }
    },
    removeItem: (state, action) => {
      const { itemId } = action.payload;
      const index = state.items.findIndex(item => item.card.info.id === itemId);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.totalPrice = calculatePrice(state.items); // Recalculate total price
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Function to calculate total price based on items in the cart
const calculatePrice = (items) => {
  return items.reduce((total, item) => {
    return total + (item.card.info.price/100 || item.card.info.defaultPrice/100) * item.quantity;
  }, 0);
};

// Export actions and reducer
export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
