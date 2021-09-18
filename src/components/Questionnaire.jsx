import Button from "./Button";
import Question from "./Question";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addQuestions } from "../state/action-creators/index";
function Questionnaire() {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const { setQuestions } = bindActionCreators(
    { setQuestions: addQuestions },
    dispatch
  );
  useEffect(async () => {
    try {
      const res = await fetch("http://localhost:3000/questions");
      const data = await res.json();
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const currentQuestionIndex = useSelector(
    (state) => state.currentQuestionIndex
  );
  console.log(questions);
  return (
    <div className="container">
      <h2>{currentQuestionIndex + 1}/10 Question</h2>
      <Question /* questionObject={questions[currentQuestionIndex]}*/
      ></Question>

      <div className="buttonsContainer">
        {" "}
        <Button text="Previous"></Button>
        <Button text="Start Over"></Button>
        <Button text="Next"></Button>
      </div>
    </div>
  );
}

export default Questionnaire;
