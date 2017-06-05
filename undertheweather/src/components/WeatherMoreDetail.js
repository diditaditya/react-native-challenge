import React from 'react';
import { View, Text } from 'react-native';

export const MoreDetail = (props) => {
  if(props.showMore) {
    return (
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.text}>Temperature:</Text>
          <Text style={styles.text}>Max: { props.weather.temp.max } C</Text>
          <Text style={styles.text}>Min: { props.weather.temp.min } C</Text>
        </View>
        <View>
          <Text style={styles.text}>Wind:</Text>
          <Text style={styles.text}>Speed: {props.weather.windSpeed} m/s</Text>
          <Text style={styles.text}>Direction: {props.weather.windDir} deg</Text>
        </View>
        <View>
          <Text style={styles.text}>Other:</Text>
          <Text style={styles.text}>Humidity: {props.weather.humidity} %</Text>
          <Text style={styles.text}>Cloudiness: {props.weather.clouds} %</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View></View>
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
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: textColor,
    fontSize: 12
  }
}

export default MoreDetail;
