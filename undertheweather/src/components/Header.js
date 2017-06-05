import React from 'react';
import {  View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

export class Header extends React.Component {
  render() {
    let maxIndex = this.props.locationData.results.length - 1;
    return (
      <View style={styles.header}>
        <Text style={styles.cityName}>{this.props.locationData.results[maxIndex].formatted_address}</Text>
        {/* <Text style={styles.currentTemp}>{parseInt(this.props.OWCurrentWeather.main.temp)} C</Text> */}
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
    // height: 150,
    alignItems: 'center'
  },
  cityName: {
    fontSize: 16,
    // color: '#F6F6F6',
    justifyContent: 'center'
  },
  currentTemp: {
    fontSize: 12,
    // color: '#F6F6F6'
  }
}

export default Header;
