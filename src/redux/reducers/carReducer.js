import { FETCH_CARS_SUCCESS } from "../actions/carActions";

const initState = {
  cars: []
};

const carsReducer = (state = initState, action) => {
  if (action.type === FETCH_CARS_SUCCESS) {
    return {
      ...state,
      cars: action.payload
    };
  }

  return state;
};

export default carsReducer;
