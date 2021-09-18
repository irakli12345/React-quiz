const reducer = (state = 0, action) => {
  switch (action.type) {
    case "forward":
      if (state == 9) {
        return state;
      } else {
        return state + action.payload;
      }
    case "backward":
      if (state == 0) {
        return state;
      } else {
        return state - action.payload;
      }
    case "reset":
      return 0;
    default:
      return state;
  }
};

export default reducer;
