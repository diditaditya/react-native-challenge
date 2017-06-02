import React from 'react';
import { View, Text } from 'react-native';

export const MoreDetail = (props) => {
  if(props.showMore) {
    return (
      <View style={styles.detailContainer}>
        <View>
          <Text>Temperature:</Text>
          <Text>Max: { props.weather.temp.max } C</Text>
          <Text>Min: { props.weather.temp.min } C</Text>
        </View>
        <View>
          <Text>Wind:</Text>
          <Text>Speed: {props.weather.windSpeed} m/s</Text>
          <Text>Direction: {props.weather.windDir} deg</Text>
        </View>
        <View>
          <Text>Other:</Text>
          <Text>Humidity: {props.weather.humidity} %</Text>
          <Text>Cloudiness: {props.weather.clouds} %</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View></View>
    );
  }
}

const styles = {
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

export default MoreDetail;
