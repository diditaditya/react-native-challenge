import React from 'react';
import {  View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.cityName}>{this.props.locationData.results[9].formatted_address}</Text>
        <Text style={styles.currentTemp}>{parseInt(this.props.OWCurrentWeather.main.temp)} C</Text>
      </View>
    )
  }
}

const styles = {
  header: {
    // backgroundColor: '#FC8A15',
    // borderWidth: 1,
    width: '100%',
    padding: 5,
    // height: 150
  },
  cityName: {
    fontSize: 25,
    // color: '#F6F6F6'
  },
  currentTemp: {
    fontSize: 18,
    // color: '#F6F6F6'
  }
}

const mapStateToProps = (state) => {
  return ({
    locationData: state.Geolocation.locationData,
    OWCurrentWeather: state.OpenWeather.currentWeather
  });
}

export default connect(mapStateToProps, null)(Header);
