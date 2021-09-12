import { combineReducers } from "redux";
import currentQuestionReducer from "./currentQuestionReducer";


const reducers = combineReducers({
    currentQuestion = currentQuestionReducer
})



export default reducers;