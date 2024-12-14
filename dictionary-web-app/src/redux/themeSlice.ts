import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { FontText, ThemeText } from "@/utils/types";

export interface ThemeState {
  theme: ThemeText;
  font: FontText;
}

const initialState: ThemeState = {
  theme: "light",
  font: "Sans Serif",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeText>) {
      state.theme = action.payload;
    },
    setFont(state, action: PayloadAction<FontText>) {
      state.font = action.payload;
    },
  },
});

export const selectTheme = (state: RootState) => state.themeReducer.theme;
export const selectFont = (state: RootState) => state.themeReducer.font;

export const { setTheme, setFont } = themeSlice.actions;
export default themeSlice.reducer;
