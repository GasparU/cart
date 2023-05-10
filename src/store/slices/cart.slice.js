import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";

const cartSlices = createSlice({
    name: "cart",
    initialState: null,
    reducers: {
        setCartGlobal: (state, action) => action.payload
    }
})
export const {setCartGlobal} = cartSlices.actions
export default cartSlices.reducer

export const getAllProductsCartThunk = () => ( dispatch)=> {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart"
    axios.get(url, getConfigToken())
    .then(res => dispatch(setCartGlobal(res.data)))
    .catch(err=>console.log(err))
}