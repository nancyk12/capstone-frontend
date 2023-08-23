import { createSlice } from '@reduxjs/toolkit';

const shopItemSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item._id === product._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item._id !== productId);
    },

    removeAllFromCart: () => {
      return [];
    },

    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((item) => item._id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((item) => item._id === productId);
      if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
          return state.filter((item) => item._id !== productId);
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllFromCart, 
  incrementQuantity,
  decrementQuantity,
} = shopItemSlice.actions;

export default shopItemSlice.reducer;