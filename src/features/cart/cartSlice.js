import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            // console.log(action);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
            );
        },
        increase: (state, { payload }) => {
            console.log(payload);
            const itemId = payload;
            state.cartItems.map((item) => item.id === itemId && item.amount++);
        },
    },
});

// console.log(cartSlice);

export const { clearCart, removeItem, increase } = cartSlice.actions;

export default cartSlice.reducer;
