import Button from "./Button";
import Question from "./Question";
import { useEffect } from "react";
function Questionnaire() {
  useEffect(async () => {
    try {
      const res = await fetch("http://localhost:3000/questions");
      const data = await res.json();
      /* Instead of console logging, we need action generator here to send this data to store in redux state*/
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="container">
      <h2>11/17 Question</h2>
      <Question></Question>
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
