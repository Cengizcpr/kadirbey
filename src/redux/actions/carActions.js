export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";

const fetchCarsSuccess = cars => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars
});

// fetch CARS
export const fetchCars = cars => {
  return dispatch => {
    dispatch(fetchCarsSuccess(cars));
  };
};
