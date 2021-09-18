export const nextQuestion = () => {
  return (dispatch) => {
    dispatch({
      type: "forward",
      payload: 1,
      /* because of thunk middleware, you can make async calls to external server for payload*/
    });
  };
};

export const previousQuestion = () => {
  return (dispatch) => {
    dispatch({
      type: "backward",
      payload: 1,
    });
  };
};

export const resetQuestion = () => {
  return (dispatch) => {
    dispatch({
      type: "reset",
    });
  };
};

export const addQuestions = (arr) => {
  return (dispatch) => {
    dispatch({
      type: "add-questions",
      payload: arr,
    });
  };
};
