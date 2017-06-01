import React from 'react';
import { View, Text,
  ActivityIndicator,
  Image,
  Button } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import { getCurrentCoordinate } from '../store/Geolocation/action';
import { fetchCurrentWeather } from '../store/OpenWeather/action';

import Forecast from './Forecast';
import StatusText from './HomeScreenStatusText';
import Location from './HomeScreenLocation';
import Thumbnail from './HomeScreenThumbnail'

const styles = {
  mainContainer: {
    flex: 1,
    width: null,
    height: null
  },
  locationContainer: {
    flex: 1,
    padding: 10
  },
  statusContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    width: 300,
    height: 300,
    // borderRadius: 10,
    // borderColor: '#ce3b06',
    // borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  }
}


class HomeScreen extends React.Component {

  static navigationOptions = {
    // header: {
    //   visible: false
    // }
  }

  constructor(props) {
    super(props);
    this.state = {
      wallpapers: {
        day: require('../images/beautiful_light_blue_sky-wallpaper-480x800.jpg'),
        night: require('../images/005e3efe1a23e55f2327eedd932c7742.jpg')
      },
      selectedWallpaper: ''
    }
  }

  fetchAllCurrentWeathers() {
    let coord = {
      lat: this.props.locationData.results[6].geometry.location.lat,
      lng: this.props.locationData.results[6].geometry.location.lng
    };
    this.props.fetchOWCurrentWeather(coord);
  }

  selectWallpaper() {
    let time = new Date();
    if(time.getHours() > 5) {
      this.setState({
        selectedWallpaper: this.state.wallpapers.day
      });
    } else if (time.getHours() > 18) {
      this.setState({
        selectedWallpaper: this.state.wallpapers.night
      });
    }
  }

  render() {
    console.log(this.props);
    if(this.props.locationData.results) {
      if(!this.props.OWCurrentWeather) {
        this.fetchAllCurrentWeathers();
        return (
          <Image source={this.state.selectedWallpaper} style={styles.mainContainer}>
            <View style={styles.locationContainer}>
              <Location locationData={this.props.locationData}/>
            </View>
            <View style={styles.statusContainer}>
              <ActivityIndicator size="large"/>
              <StatusText locationData={this.props.locationData} OWCurrentWeather={this.props.OWCurrentWeather}/>
            </View>
          </Image>
        )
      } else {
        return (
          <Image source={this.state.selectedWallpaper} style={styles.mainContainer}>
            <View style={styles.locationContainer}>
                <Location locationData={this.props.locationData}/>
            </View>
            <View style={styles.statusContainer}>
              <View style={styles.thumbnail}>
                <Thumbnail currentWeather={this.props.OWCurrentWeather} navigation={this.props.navigation}/>
              </View>
            </View>
          </Image>
        )
      }
    } else {
      return (
        <Image source={this.state.selectedWallpaper} style={styles.mainContainer}>
            <View style={styles.statusContainer}>
              <ActivityIndicator size="large"/>
              <StatusText locationData={this.props.locationData} OWCurrentWeather={this.props.OWCurrentWeather}/>
            </View>
        </Image>
      )
    }

  }

  componentWillMount() {
    this.selectWallpaper();
  }

  componentDidMount() {
    this.props.getCurrentLocation();
  }

}

const mapStateToProps = (state) => {
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

let Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

// export default test;

const HomeNav = StackNavigator({
    HomeScreen: {
      screen: Home,
    },
    Forecast: {
      screen: Forecast
    }
  },{
    headerMode: 'none'
  });

export default HomeNav;
