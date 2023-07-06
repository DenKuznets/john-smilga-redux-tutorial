import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
    return fetch(url)
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
});

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
            // console.log(payload);
            const cartItem = state.cartItems.find(
                (item) => item.id === payload
            );
            cartItem.amount++;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload
            );
            cartItem.amount--;
        },

        // универсальный вариант вместо decrease и increase
        toggle: (state, { payload: { id, action } }) => {
            const cartItem = state.cartItems.find((item) => item.id === id);
            cartItem.amount += action === "+" ? 1 : -1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

// console.log(cartSlice);

export const {
    clearCart,
    removeItem,
    increase,
    decrease,
    toggle,
    calculateTotals,
} = cartSlice.actions;

// console.log(cartSlice.reducer);

export default cartSlice.reducer;
