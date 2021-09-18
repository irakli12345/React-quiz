const reducer = (state = [], action) => {
  switch (action.type) {
    case "add-questions":
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
