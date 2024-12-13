import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface QuizState {
  title: string;
  score: number;
  isStarted: boolean;
  currentQuestionIndex: number | null;
}

const initialState: QuizState = {
  title: "",
  score: 0,
  isStarted: false,
  currentQuestionIndex: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setStartQuiz(state, action: PayloadAction<string>) {
      state.title = action.payload;
      state.isStarted = true;
      state.currentQuestionIndex = 0;
    },
    setCurrentQuestionIndex(state, action: PayloadAction<number>) {
      state.currentQuestionIndex = action.payload;
    },
    incrementScore(state) {
      state.score += 1;
    },
    decrementScore(state) {
      state.score -= 1;
    },
    setFinishQuiz(state) {
      state.isStarted = false;
    },
    resetQuiz(state) {
      state.title = "";
      state.score = 0;
      state.currentQuestionIndex = null;
    },
  },
});

export const { setStartQuiz, setCurrentQuestionIndex, incrementScore, decrementScore, setFinishQuiz, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
