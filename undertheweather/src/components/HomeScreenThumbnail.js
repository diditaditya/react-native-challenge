import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class CurrentWeatherThumbnail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.weatherInfoContainer}>
          <View style={styles.descriptionContainer}>
              <Image source={{uri: "http://openweathermap.org/img/w/"+this.props.currentWeather.weather.icon+".png"}} style={styles.icon}/>
              {/* <Text style={styles.description}>{this.props.currentWeather.weather.description}</Text> */}
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Forecast')} >
                <Image source={require('../images/684796_arrows_512x512.png')}  style={styles.showMore}/>
              </TouchableOpacity>
          </View>
          <View style={styles.mainTempContainer}>
              <Text style={styles.mainTemp}>{parseInt(this.props.currentWeather.main.temp)}</Text>
              <Text style={styles.degree}>o</Text>
          </View>
          <View style={styles.infoTempContainer}>
            <Text style={styles.infoTemp}>min: {this.props.currentWeather.main.temp_min}</Text>
            <Text style={styles.infoTemp}>max: {this.props.currentWeather.main.temp_max}</Text>
          </View>
        </View>
        <View style={styles.showMoreContainer}>

        </View>
      </View>
    );
  }

}

const styles = {
  mainContainer: {
    flexDirection: 'row',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end'
    // borderWidth: 1
  },
  weatherInfoContainer: {
    flexDirection: 'column'
  },
  descriptionContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainTempContainer: {
    // borderWidth: 1,
    flexDirection: 'row'
  },
  infoTempContainer: {
    // borderWidth: 1,
    flexDirection: 'row'
  },
  showMoreContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    // flex: 0.5,
    width: 100,
    height: 100,
  },
  description: {
    flex: 1,
    // borderWidth: 1
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
  },
  showMore: {
    margin: 10,
    width: 50,
    height: 50,
    opacity: 0.6
  }
}

export default CurrentWeatherThumbnail;
