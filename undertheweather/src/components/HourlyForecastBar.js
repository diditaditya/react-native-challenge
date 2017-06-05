import React from 'react';
import {  View, Text, ScrollView, ListView, ActivityIndicator } from 'react-native';

import HourlyForecastItem from './HourlyForecastItem';

class HourlyForecastBar extends React.Component {

  render() {
    if(this.props.hourlyForecast) {
      return (
        <View style={styles.container}>
          <ScrollView sytle={{flexDirection: 'center'}} horizontal={true}>
            { this.props. hourlyForecast.map((item, index) => {
              return (
                <View key={index}>
                  <HourlyForecastItem weather={item}/>
                </View>
              );
            })}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
          <Text>Loading hourly forecast ..</Text>
        </View>
      );
    }

  }

}

const now = new Date();
let textColor = '';
let bgColor = '';
if (now.getHours > 5) {
  textColor = 'rgba(255,255,255,1)';
  bgColor = 'rgba(0,0,0,0.5)';
} else if (now.getHours > 18 || now.getHours() >= 0) {
  textColor = 'rgba(0,0,0,1)';
  bgColor = 'rgba(255,255,255,0.5)';
}

const styles = {
  container: {
    backgroundColor: bgColor,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
}



export default HourlyForecastBar;
