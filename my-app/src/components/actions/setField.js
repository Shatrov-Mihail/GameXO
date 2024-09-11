export const setField = (field) => {
  return {
    type: "SET_FIELD",
    payload: field,
  };
};