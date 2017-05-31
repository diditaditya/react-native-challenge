import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';

import { getCurrentCoordinate } from '../store/Geolocation/action';
import { fetchCurrentWeather } from '../store/OpenWeather/action';

import StatusText from './HomeScreenStatusText';
import Location from './HomeScreenLocation';
import Thumbnail from './HomeScreenThumbnail'

const styles = {
  mainContainer: {
    flex: 1,
    // backgroundColor: '#045ded',
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  locationContainer: {
    flex: 1,
    // backgroundColor: '#ce3b06',
    padding: 10
  },
  statusContainer: {
    flex: 3,
    // backgroundColor: '#e1ed04',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    width: 300,
    height: 300,
    // backgroundColor: '#045ded',
    // borderRadius: 10,
    // borderColor: '#ce3b06',
    // borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  }
}


class HomeScreen extends React.Component {

  fetchAllCurrentWeathers() {
    let coord = {
      lat: this.props.locationData.results[6].geometry.location.lat,
      lng: this.props.locationData.results[6].geometry.location.lng
    };
    this.props.fetchOWCurrentWeather(coord);
  }

  render() {
    console.log(this.props);
    if(this.props.locationData.results) {
      if(!this.props.OWCurrentWeather) {
        this.fetchAllCurrentWeathers();
        return (
          <View style={styles.mainContainer}>
            <View style={styles.locationContainer}>
              <Location locationData={this.props.locationData}/>
            </View>
            <View style={styles.statusContainer}>
              <ActivityIndicator size="large"/>
              <StatusText locationData={this.props.locationData} OWCurrentWeather={this.props.OWCurrentWeather}/>
            </View>
          </View>
        )
      } else {
        return (
          <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/2e/c6/b5/2ec6b5e14fe0cba0cb0aa5d2caeeccc6.jpg'}} style={styles.mainContainer}>
            <View style={styles.locationContainer}>
                <Location locationData={this.props.locationData}/>
            </View>
            <View style={styles.statusContainer}>
              <View style={styles.thumbnail}>
                <Thumbnail currentWeather={this.props.OWCurrentWeather}/>
              </View>
            </View>

          </Image>
        )
      }
    } else {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.statusContainer}>
            <ActivityIndicator size="large"/>
            <StatusText locationData={this.props.locationData} OWCurrentWeather={this.props.OWCurrentWeather}/>
          </View>
        </View>
      )
    }

  }

  componentDidMount() {
    this.props.getCurrentLocation();
  }

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    locationData: state.Geolocation.locationData,
    OWCurrentWeather: state.OpenWeather.currentWeather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentLocation: () => dispatch(getCurrentCoordinate()),
    fetchOWCurrentWeather: (coord) => dispatch(fetchCurrentWeather(coord))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
