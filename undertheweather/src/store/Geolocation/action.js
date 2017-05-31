import Axios from 'axios';

import { GET_CURRENT_POSITION_SUCCESS, GET_CURRENT_POSITION_FAILED } from '../constants';

export const getCurrentPositionSuccess = (data) => {
  return {
    type: GET_CURRENT_POSITION_SUCCESS,
    payload: data
  }
}

export const getCurrentPositionFailed = (data) => {
  return {
    type: GET_CURRENT_POSITION_FAILED,
    payload: data
  }
}

export const getCurrentPosition = (data) => {
  let latlng = `${data.coords.latitude},${data.coords.longitude}`;
  let url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}`;
  return dispatch => {
    return Axios.get(url)
      .then((response) => {
        if(response.status === 200) {
          dispatch(getCurrentPositionSuccess(response.data));
        } else {
          console.log('error fetching reverse-geocode data');
          dispatch(getCurrentPositionFailed());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const getCurrentCoordinate = () => {
  return dispatch => {
    return navigator.geolocation.getCurrentPosition(data => {
        dispatch(getCurrentPosition(data));
      }, err => {
        console.log(err);
        let latlng = {
            lat: -6.17511,
            lng: 106.8650395
        };
        dispatch(getCurrentPosition(latlng));
      });

  }

}
