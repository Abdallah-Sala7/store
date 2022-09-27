import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalPrice: 0
}

const cartSlis = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.item.id
            )
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += action.payload.quant;
            } else {
                const tempProduct = {...action.payload.item, cartQuantity: action.payload.quant}
                state.cartItems.push(tempProduct)
            }
            state.totalAmount = state.cartItems.length;
            state.totalPrice += action.payload.item.price * action.payload.quant
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload
            )

            state.totalPrice -= state.cartItems[itemIndex].price

            if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(item => item.id != action.payload)
            }
            state.totalAmount = state.cartItems.length;
        },
        removeProduct: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload
            )
            
            state.totalPrice -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].cartQuantity

            state.cartItems = state.cartItems.filter(item => item.id != action.payload)
            state.totalAmount = state.cartItems.length;
        }
    }
})

export const { addToCart, removeFromCart, removeProduct } = cartSlis.actions
export default cartSlis.reducer