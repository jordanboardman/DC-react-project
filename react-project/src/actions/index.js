export const incrementCount = () => {
  console.log("checkpoint 2");
  return {
    type: "INCREMENT",
  };
};

export const incrementByNum = (num) => {
  console.log("checkpoint 2");
  return {
    type: "INCREMENT_BY_NUM",
    payload: num,
  };
};

// {incrmentCount: incremntCount, incremtnByNum:increm}
// export default incrementCount
