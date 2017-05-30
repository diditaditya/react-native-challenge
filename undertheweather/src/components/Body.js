import React from 'react';
import {  View, Text, ScrollView } from 'react-native';
import Axios from 'axios';

import Weather from './Weather';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weathers: []
    }
  }

  convertDate(oriDate) {
      let fullDate = new Date(oriDate);
      let year = fullDate.getFullYear();
      let month = String(fullDate.getMonth() + 1);
      if(month.length === 1) {
          month = '0' + month;
      }
      let date = String(fullDate.getDate());
      if(date.length === 1) {
          date = '0' + date;
      }
      return `${year}-${month}-${date}`;
  }

  render() {
    return (
        <ScrollView style={styles.body}>
          {this.state.weathers.map( (weather, index) => {
            return (
              <Weather key={index} weather={weather}/>
            )
          })}
        </ScrollView>
    )
  }

  componentDidMount() {
    let city = 'Jakarta';
    let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&APPID=8b8926b398fdba5ce76701d649c783f8`
    let self = this;
    Axios.get(url)
        .then((response) => {
          console.log(response);
          if(response.status = 200) {
            console.log(response.data.list);
            let today = new Date();
            let data = response.data.list.map((item, index) => {
              let weatherDate = new Date(today.setDate(today.getDate() + index));
              return {
                date: self.convertDate(weatherDate),
                temp: item.temp,
                weather: item.weather[0],
                icon: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`
              }
            } );
            console.log(data);
            self.setState({
              weathers: data
            });
          } else {
            console.log('failed, check response')
          }
        })
        .catch((err) => {
            console.log(err);
        });
  }

}

const styles = {
  body: {
    backgroundColor: '#F6F6F6',
    padding: 5,
    margin: 10
  },
  weatherContainer: {
    backgroundColor: '#1EE494'
  },
  weatherText: {
    fontSize: 32,
    color: '#009378'
  }
}

export default Body;
