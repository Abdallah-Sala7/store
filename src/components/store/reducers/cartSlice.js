import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    totalAmount : 0,
    totalPrice : 0
}

const cartSlis = createSlice({
    name:'cart',
    initialState,
    reducers :{
        addToCart: (state,action) =>{
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = {...action.payload, cartQuantity:1}
                state.cartItems.push(tempProduct)
            }
            state.totalAmount = state.cartItems.length;
        },
        removeFromCart: (state,action) =>{
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload
            )
            if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(item => item.id != action.payload)
            }
            state.totalAmount = state.cartItems.length;
        },
        removeProduct: (state, action) =>{
            state.cartItems = state.cartItems.filter(item => item.id != action.payload)
            state.totalAmount = state.cartItems.length;
        }
    }
})

export const {addToCart, removeFromCart, removeProduct} = cartSlis.actions
export default cartSlis.reducer