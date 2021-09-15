import Button from "./Button";
import Question from "./Question";
import { useEffect } from "react";

function Questionnaire() {
  useEffect(() => console.log("boo"), []);
  return (
    <div class="container">
      <h2>11/17 Question</h2>
      <Question></Question>
      <div class="buttonsContainer">
        {" "}
        <Button text="Previous"></Button>
        <Button text="Start Over"></Button>
        <Button text="Next"></Button>
      </div>
    </div>
  );
}

export default Questionnaire;
