import { createSlice } from "@reduxjs/toolkit"

const initialState = { cart : []   }

const cartSlice =  createSlice({
   name: "product",
   initialState,
   reducers:{
     addProductToCart (state,action){
        console.log(action.payload)
        state.cart.push(action.payload)
     },

     increaseQuantity(state,action){

     },

     decreaseQuantity(state,action){

     },

   }

})

export const { addProductToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions


export default cartSlice.reducer