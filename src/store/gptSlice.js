import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    resetGPTSearch: (state) => {
      state.showGPTSearch = false;
    },
  },
});

export const { toggleGPTSearch, resetGPTSearch } = gptSlice.actions;
export default gptSlice.reducer;
