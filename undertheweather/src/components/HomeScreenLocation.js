import React from 'react';
import { View, Text } from 'react-native';

const HomeScreenLocation = (props) => {
  return (
    <View>
      <Text style={styles.location}>{props.locationData.results[6].formatted_address}</Text>
      <Text>Lat: {props.locationData.results[6].geometry.location.lat}</Text>
      <Text>Long: {props.locationData.results[6].geometry.location.lng}</Text>
    </View>
  )
}

const styles = {
  location: {
    fontSize: 30
  }
}

export default HomeScreenLocation;
