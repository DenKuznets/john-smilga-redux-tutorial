import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, actiom) => {
            state.isOpen = true;
        },
        closeModal: (state, actiom) => {
            state.isOpen = false;
        },
    },
});

// откуда берутся action, если забыл : реакт тулкит сам их создает исходя из переданных в modalSlice данных. action это js объект состоит из двух частей, type и action. type это строка описывающая вкратце действие, например (open modal), тулкит автоматом создает такую строку из имени slice (name: 'modal') и названия функции action (openModal, closeModal etc)
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
