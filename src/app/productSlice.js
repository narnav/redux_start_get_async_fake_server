import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData, addData, updData } from "./productAPI";

// state - the slicer variables
const initialState = {
  myProducts: [],
  cart: [],
  connect: true,
};

// async - calls (1)
export const fetchDataAsync = createAsyncThunk("prod/fetchData", async () => {
  const response = await fetchData();
  return response.data;
});
export const updDataAsync = createAsyncThunk(
  "prod/updData",
  async (newProd) => {
    console.log(newProd);
    const response = await updData(newProd);
    return newProd;
  }
);

export const addDataAsync = createAsyncThunk(
  "prod/addData",
  async (newProd) => {
    // console.log(newProd);
    const response = await addData(newProd);
    return newProd;
  }
);

export const prodSlice = createSlice({
  name: "prod",
  initialState,
  reducers: {
    //sync methods
    add2cart: (state, action) => {
      console.log(action.payload.id);
      console.log(action.payload);
      state.cart.push(action.payload.id);
    },
  }, //async (result) (3)
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.myProducts = action.payload;
      })
      .addCase(addDataAsync.fulfilled, (state, action) => {
        state.cart.push(action.payload);
      });
  },
});

export const { add2cart } = prodSlice.actions;
export const selectMyproducts = (state) => state.prod.myProducts; //export state
export const selectConnect = (state) => state.prod.connect; //export state
export const selectCart = (state) => state.prod.cart; //export state
export const selectMyproductsCount = (state) => state.prod.myProducts.count; //export state
export default prodSlice.reducer;
