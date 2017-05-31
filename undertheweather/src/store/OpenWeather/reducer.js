import { FETCH_CURRENT_WEATHER_SUCCESS } from '../constants';

const initialState = {
  currentWeather: ''
}

const OpenWeatherReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeather: action.payload
      }
    default:
      return state
  }
}

export default OpenWeatherReducer;
