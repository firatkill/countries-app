import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { theme: "dark", selectedRegion: "All", filterValue: "" },
  reducers: {
    switchMode(state) {
      state.theme === "dark" ? (state.theme = "light") : (state.theme = "dark");
    },
    assignSelectedRegion(state, action) {
      state.selectedRegion = action.payload;
    },
    assignFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export default uiSlice;

export const uiActions = uiSlice.actions;
