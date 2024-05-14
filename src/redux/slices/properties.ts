import { createSlice } from "@reduxjs/toolkit";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: [],
  reducers: {},
});

export const actions = propertiesSlice.actions;
export default propertiesSlice.reducer;
