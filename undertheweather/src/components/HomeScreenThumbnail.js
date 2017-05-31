import React from 'react';
import { View, Text, Image } from 'react-native';

class CurrentWeatherThumbnail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.mainTempContainer}>
            <Text style={styles.mainTemp}>{parseInt(this.props.currentWeather.main.temp)}</Text>
            <Text style={styles.degree}>o</Text>
        </View>
        <View style={styles.infoTempContainer}>
          <Text style={styles.infoTemp}>min: {this.props.currentWeather.main.temp_min}</Text>
          <Text style={styles.infoTemp}>max: {this.props.currentWeather.main.temp_max}</Text>
        </View>

      </View>
    );
  }

}

const styles = {
  mainContainer: {
    flexDirection: 'column',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end'
  },
  mainTempContainer: {
    // borderWidth: 1,
    flexDirection: 'row'
  },
  infoTempContainer: {
    // borderWidth: 1,
    flexDirection: 'row'
  },
  mainTemp: {
    fontSize: 150,
    opacity: 2
    // borderWidth: 1
  },
  infoTemp: {
    fontSize: 25,
    marginRight: 10
  },
  degree: {
    marginTop: 25,
    fontSize: 50,
    // borderWidth: 1
  }
}

export default CurrentWeatherThumbnail;
