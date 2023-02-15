import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock: false,
    category: [],
    keyword: ''
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {}
})



export default filterSlice.reducer;