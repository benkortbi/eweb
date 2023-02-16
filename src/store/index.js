const { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice.js'
const STORE = configureStore({
  reducer: {
    CART: cartSlice.reducer
  }
})

export default STORE;

