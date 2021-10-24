import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

export const createQuizAndAddTopic = createAsyncThunk(
  "quizzes/createQuizAndAddTopic",
  async (newQuiz, thunkAPI) => {
    thunkAPI.dispatch(addQuiz(newQuiz));
    thunkAPI.dispatch(
      addQuizToTopic({ quizId: newQuiz.id, topicId: newQuiz.topicId })
    );
  }
);

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: { quizzes: {} },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const { addQuiz } = quizzesSlice.actions;

export const selectQuizzes = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;
