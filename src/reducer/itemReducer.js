const initialState = { items: [], loading: false };

const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "getItemsprocess":
    case "addItemsprocess":
      return { ...state, loading: true };
      break;

    case "getItemssucceed":
      return { items: payload, loading: false };
      break;

    case "getitemFailed":
    case "additemFailed":
      return { ...state, loading: false };
      break;

    default:
      return state;
      break;
  }
};
export default itemReducer;
