import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { GlobalState, Photo } from "@/lib/types";

type Status = "idle" | "pending" | "succeeded" | "rejected";
type Error = string | null;
interface InitialState extends GlobalState {
  photos: {
    data: Photo[];
    status: Status;
    error: Error;
  };
}

// Define the initial state using that type
const initialState: InitialState = {
  language: "zh-TW",
  country: "TW",
  photos: {
    data: [],
    status: "idle",
    error: "",
  },
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotosAsync.pending, (state, action) => {
        state.photos.status = "pending";
      })
      .addCase(fetchPhotosAsync.fulfilled, (state, action) => {
        state.photos.status = "succeeded";
        state.photos.data = action.payload;
      })
      .addCase(fetchPhotosAsync.rejected, (state, action) => {
        state.photos.status = "rejected";
        state.photos.error = action.error.message ?? "Unknown Error";
      });
  },
});

async function fetchPhotoAndRepoData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const list = await response.json();
    return { list: Array.isArray(list) ? list : [] };
  } catch (error) {
    throw error;
  }
}

// use createAsyncThunk async fetch api
export const fetchPhotosAsync = createAsyncThunk(
  "photos/fetchPhotos",
  async () => {
    const response = await fetchPhotoAndRepoData();
    return response.list;
  }
);

export const { updateLanguage, updateCountry } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLanguage = (state: RootState) => state.global.language;
export const selectCountry = (state: RootState) => state.global.country;
export const selectPhotos = (state: RootState) => state.global.photos;
export default globalSlice.reducer;
