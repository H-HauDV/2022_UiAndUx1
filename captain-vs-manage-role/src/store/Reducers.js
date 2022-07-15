import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        userInfo: action.payload,
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        userInfo: {},
      };
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notifi: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
