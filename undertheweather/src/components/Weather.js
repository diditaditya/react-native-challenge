import React from 'react';
import {  View, TouchableOpacity, Text , Image} from 'react-native';

class Weather extends React.Component {

  render() {
    return (
      <TouchableOpacity style={styles.weatherContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.weatherText}>{this.props.weather.date}</Text>
          <Text style={styles.weatherText}>{this.props.weather.weather.description}</Text>
        </View>
        <Image style={styles.image} source={{uri: this.props.weather.icon}}/>
      </TouchableOpacity>
    )
  }
}

const styles = {
  weatherContainer: {
    backgroundColor: '#1EE494',
    marginBottom: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    // height: 50
  },
  weatherText: {
    fontSize: 32,
    color: '#009378'
  },
  image: {
    width: 50,
    height: 50,
  }
}

export default Weather;
