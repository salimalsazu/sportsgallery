import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock: false,
    category: [],
    keyword: ''
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleCategory: (state, action) => {
            if (!state.category.includes(action.payload)) {
                state.category.push(action.payload)
            } else {
                state.category= state.category.filter(c => c !== action.payload)
            }
        }
    }
})


export const { toggleCategory } = filterSlice.actions;

export default filterSlice.reducer;