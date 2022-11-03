const reducer = (state, action) => {
  if (state === undefined) {
    state = {
      count: 10,
      name: "An",
      contacts: [], //[{id, firstName, city},{}, {}]
    };
  }

  switch (action.type) {
    case "INCREMENT":
      console.log("checkpoint 3");
      return {
        ...state,
        count: state.count + 1,
      };
    case "INCREMENT_BY_NUM":
      console.log("checkpoint 3");
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: state.contacts.concat(action.data),
      };

    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contactObj) => {
          return contactObj.id !== action.id;
        }),
      };

    default:
      return state;
  }
};

// export default reducer;
