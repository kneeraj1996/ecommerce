import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cartItems: [],
    couponCode: "",
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addCartItems: (state, action) => {
      const { id } = action.payload;
      const foundItem = state.cartItems.find((item) => item.id === id);

      if (foundItem) {
        foundItem.quantity = (foundItem.quantity || 1) + 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    adjustCartQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === id);
      if (item) {
        item.quantity = Math.max(1, (item.quantity || 1) + amount);
      }
    },
    removeCartItem: (state, action) => {
      let filteredItems = state.cartItems.filter((item) => item.id != action.payload);
      state.cartItems = filteredItems;
    },

    addCouponCode: (state, action) => {
      state.couponCode = action.payload;
    },
  },
});

export const {removeCartItem, addProducts, addCartItems, adjustCartQuantity, addCouponCode } =
  productSlice.actions;
export default productSlice.reducer;
