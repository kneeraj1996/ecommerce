import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistProducts: [],
  },
  reducers: {
    addProductToWishlist: (state, action) => {
      state.wishlistProducts.push(action.payload);
    },

    removeProductFromWishlist: (state, action) => {
        let data = state.wishlistProducts.filter((item) => item.id != action.payload.id);
        state.wishlistProducts = data;
    },
  },
});

export const { addProductToWishlist, removeProductFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
