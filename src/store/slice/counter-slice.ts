import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase: (state) => state + 1,
    decrease: (state) => state - 1,
  },
});

export const { increase, decrease }: any = counterSlice.actions;

export const reducer = counterSlice.reducer;
