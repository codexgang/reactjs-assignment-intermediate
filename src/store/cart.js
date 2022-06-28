
import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], totalQuantity: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const newItem = action.payload;
      state.totalQuantity++
      state.totalPrice = state.totalPrice + newItem.price
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        });
      }else{
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price

      }
    },
    decreaseQuantity(state, action) {

        const {id,price} = action.payload;
        state.totalQuantity--
        state.totalPrice = state.totalPrice - price
        const existingItem = state.cart.find((item)=> item.id === id);
        if(existingItem.quantity === 1) {
            state.cart = state.cart.filter(item=> item.id !== id);

        }else{
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price
        }

    },

    increaseQuantity(state, action) {
        const {id, price} = action.payload;
        state.totalQuantity++
        state.totalPrice = state.totalPrice + price
        const existingItem = state.cart.find((item)=> item.id === id);
        if(existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice + existingItem.price

        }
    },

  },
});

export const { addProductToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
