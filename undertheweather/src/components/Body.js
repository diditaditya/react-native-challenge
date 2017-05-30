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
    if(this.state.weathers.length > 0) {
      return (
          <ScrollView style={styles.body}>
            {this.state.weathers.map( (weather, index) => {
              return (
                <Weather key={index} weather={weather}/>
              )
            })}
          </ScrollView>
      );
    } else {
      return (
        <View style={styles.loadingText}>
          <Text>Loading Weather Forecast ..</Text>
        </View>
      );
    }

  }

  componentDidMount() {
    let city = 'Jakarta';
    let count = 10;
    let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=${count}&APPID=8b8926b398fdba5ce76701d649c783f8`
    let self = this;
    Axios.get(url)
        .then((response) => {
          if(response.status = 200) {
            console.log(response.data);
            let today = new Date();
            let data = response.data.list.map((item, index) => {
              let weatherDate = new Date(today.setDate(today.getDate() + index));
              return {
                date: self.convertDate(weatherDate),
                temp: item.temp,
                humidity: item.humidity,
                windSpeed: item.speed,
                windDir: item.deg,
                clouds: item.clouds,
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
  },
  loadingText: {
  }
}

export default Body;
