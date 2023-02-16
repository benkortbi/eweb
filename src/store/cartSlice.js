import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
  name: 'CART',
  initialState: {
    listOfProducts: getData
  }
})
export const cartAction = cartSlice.action;
export default cartSlice;

