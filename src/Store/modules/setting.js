import { handleActions, createAction } from "redux-actions";
const SETVALUE = "setting/SETVALUE";

export const setValue = createAction(SETVALUE);

const initialState = {
  length: 0,
  weight: 0,
  weights: ""
};

export default handleActions(
  {
    [SETVALUE]: (state, action) => {
      const { length, weight, weights } = action.payload;

      console.log(action.payload);
      return {
        ...state,
        length: Number(length),
        weight: Number(weight),
        weights: weights
      };
    }
  },
  initialState
);
