import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../Feature/cart/cartSlice'
import filterslice from '../Feature/filter/filterslice'



export const store = configureStore({
    // devTools: false,
    reducer: {
        cart: cartSlice,
        filter: filterslice
    },
})

