const reducer = (state = 0, action) => {
  switch (action.type) {
    case "forward":
      return state + action.payload;
    case "backward":
      return state - action.payload;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export default reducer;
/* my solution doesn't use payload at all.. what if I must use it?
then I guess I would make it 1, always*/
