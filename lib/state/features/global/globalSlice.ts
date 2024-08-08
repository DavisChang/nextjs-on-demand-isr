import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { GlobalState } from "@/lib/types";

// Define the initial state using that type
const initialState: GlobalState = {
  language: "zh-TW",
  country: "TW",
};

export const globalSlice = createSlice({
  name: "global",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    updateCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export const { updateLanguage, updateCountry } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLanguage = (state: RootState) => state.global.language;
export const selectCountry = (state: RootState) => state.global.country;

export default globalSlice.reducer;
