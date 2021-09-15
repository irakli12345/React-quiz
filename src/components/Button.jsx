/* I can make it a generic button, which I'll use for all three:
Start, Go Back, Reset, Submit*/
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  nextQuestion,
  previousQuestion,
  resetQuestion,
} from "../state/action-creators/index";
function Button({ text }) {
  const currentQuestionIndex = useSelector(
    (state) => state.currentQuestionIndex
  );
  const dispatch = useDispatch();
  const { next, previous, reset } = bindActionCreators(
    { next: nextQuestion, previous: previousQuestion, reset: resetQuestion },
    dispatch
  );
  /* this is destructured */

  const pickAction = (text) => {
    if (text === "Next") {
      return next;
    } else if (text === "Previous") {
      return previous;
    } else if (text === "Start Over") {
      return reset;
    } else {
      return null;
    }
  };
  return (
    <button onClick={pickAction(text)}>
      {text} {currentQuestionIndex}
    </button>
  );
}

export default Button;
