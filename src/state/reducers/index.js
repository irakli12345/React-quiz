import { combineReducers } from "redux";
import currentQuestionReducer from "./currentQuestionReducer";
import questionsReducer from "./questionsReducer";
const reducers = combineReducers({
  currentQuestionIndex: currentQuestionReducer,
  questions: questionsReducer,
});

export default reducers;
