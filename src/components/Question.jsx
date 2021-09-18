function Question() {
  const questionObject = {
    question:
      "What's the name of the object we use to pass down data from parent to children?",
    multipleChoiceAnswers: ["state", "props", "hooks", "event"],
    correctAnswerIndex: 1,
  };
  return (
    <div className="question">
      <p>{questionObject["question"]}</p>
    </div>
  );
}

export default Question;
