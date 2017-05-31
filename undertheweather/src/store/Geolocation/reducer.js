import { GET_CURRENT_POSITION_SUCCESS, GET_CURRENT_POSITION_FAILED } from '../constants';

const initialState = {
  locationData: '',
  message: ''
};

const GeolocationReducer = (state = initialState, action) => {
  if (action.type === GET_CURRENT_POSITION_SUCCESS) {
    return {
      ...state,
      message: '',
      locationData: action.payload
    }
  } else if (action.type === GET_CURRENT_POSITION_FAILED) {
    return {
      ...state,
      message: 'Unable to get current position, default location is used'
    }
  } else {
    return state
  }
}

export default GeolocationReducer;
