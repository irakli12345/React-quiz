import { combineReducers } from "redux";
import currentQuestionReducer from "./currentQuestionReducer";

const reducers = combineReducers({
  currentQuestionIndex: currentQuestionReducer,
});

export default reducers;
