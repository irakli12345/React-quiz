import Button from "./Button";
import Question from "./Question";
function Questionnaire() {
  return (
    <div class="container">
      <h2>11/17 Question</h2>
      <Question></Question>
      <div class="buttonsContainer">
        {" "}
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default Questionnaire;
