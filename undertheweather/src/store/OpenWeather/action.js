import Axios from 'axios';

import { FETCH_CURRENT_WEATHER_SUCCESS } from '../constants';

const setCurrentWeather = (data) => {
  return {
    type: FETCH_CURRENT_WEATHER_SUCCESS,
    payload: data
  }
}

export const fetchCurrentWeather = (coord) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lng}&mode=json&units=metric&APPID=8b8926b398fdba5ce76701d649c783f8`;
  return dispatch => {
    return Axios.get(url)
      .then((response) => {
        // console.log(response);
        if(response.status === 200) {
          let data = {
            weather: response.data.weather[0],
            wind: response.data.wind,
            main: response.data.main
          }
          console.log(data);
          dispatch(setCurrentWeather(data));
        } else {
          console.log('Failed fetching data from Open Weather')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
