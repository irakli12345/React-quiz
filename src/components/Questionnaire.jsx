import Button from "./Button";
import Question from "./Question";
import { useEffect } from "react";

function Questionnaire() {
  useEffect(async () => {
    try {
      const res = await fetch("http://localhost:3000/questions");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
