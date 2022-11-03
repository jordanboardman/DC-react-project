export const addContact = (id, firstName, city) => {
  //action creator

  return {
    //action
    type: "ADD_CONTACT",
    data: {
      id,
      firstName,
      city,
    },
  };
};

export const removeContact = (id) => {
  return {
    type: "REMOVE_CONTACT",
    id,
  };
};
