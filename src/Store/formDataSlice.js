import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    title: "",
    location: "",
    date: "",
    img: "",
    desc: "",
    file: "",
};

const formSlice = createSlice({
    name: "form",
    initialState: {
        formData: initialValue,
    },
    reducers: {
        addFormData: (state, action) => {
            state.formData = action.payload;
        },
    },
});

export const { addFormData } = formSlice.actions;
export default formSlice;
