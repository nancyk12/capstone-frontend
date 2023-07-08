// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((item) => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((item) => item.id === productId);
      if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
          return state.filter((item) => item.id !== productId);
        }
      }
    },
  },
});


export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,

  
} = productSlice.actions;

export default productSlice.reducer;