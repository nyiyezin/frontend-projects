import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { Dictionary } from "@/utils/types";

interface InitialState {
  word: Dictionary;
  status: string;
}
interface FetchWordAsyncParamsState {
  url: string;
  searchValue: string;
}

const initialState: InitialState = {
  word: [],
  status: "",
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWordAsync.pending, (state) => {
        state.word = [];
        state.status = "loading";
      })
      .addCase(fetchWordAsync.fulfilled, (state, action) => {
        state.word = action.payload;
        state.status = "success";
      })
      .addCase(fetchWordAsync.rejected, (state) => {
        state.word = [];
        state.status = "error";
      });
  },
});

export const fetchWordAsync = createAsyncThunk(
  "word/fetchWordAsync",
  async (params: FetchWordAsyncParamsState) => {
    const { url, searchValue } = params;

    const response = await fetch(`${url}${searchValue}`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Dictionary = await response.json();
    return data;
  }
);

export const selectWord = (state: RootState) => state.wordReducer.word;
export const selectStatus = (state: RootState) => state.wordReducer.status;

export const { reset } = wordSlice.actions;
export default wordSlice.reducer;
