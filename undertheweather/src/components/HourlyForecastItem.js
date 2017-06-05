import React from 'react';
import {  View, Text, ScrollView, Image, ListView, ActivityIndicator } from 'react-native';

class HourlyForecastItem extends React.Component {

  render() {
    let fullDate = this.props.weather.date.split(' ');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{fullDate[0].slice(5)}</Text>
        <Text style={styles.text}>{fullDate[1].slice(0, 5)}</Text>
        <Image source={{uri: this.props.weather.icon}} style={styles.icon}/>
      </View>
    );
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
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3
  },
  text: {
    fontSize: 10,
    color: textColor
  },
  icon: {
    width: 25,
    height: 25
  }
}

export default HourlyForecastItem;
