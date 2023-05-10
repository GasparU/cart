import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlices = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProductsGlobal: (state, action) => action.payload,
  },
});
const { setProductsGlobal } = productsSlices.actions;
export default productsSlices.reducer;

export const getAllProductsThunk = () => (dispatch) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products";
  axios
    .get(url)
    .then((res) => dispatch(setProductsGlobal(res.data)))
    .catch((err) => console.log(err));
};
