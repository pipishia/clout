import {createSlice} from '@reduxjs/toolkit';
const initalState = {cartItems:[]};
const cartSlice = createSlice({
    name:'cart',
    initalState,
    reducers:{
        addCartItems:()=>{},
    },
});

export const selectCartItems = (state)=>state.cart.cartItems;
export const {addCartItems} = cartSlice.actions;
export default cartSlice.reducer;