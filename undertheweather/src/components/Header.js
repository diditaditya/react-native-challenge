import React from 'react';
import {  View, Text, Image } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.cityName}>Jakarta</Text>
        <Text style={styles.currentTemp}>32c</Text>
      </View>
    )
  }
}

const styles = {
  header: {
    backgroundColor: '#FC8A15',
    width: '100%',
    padding: 5,
    height: 150
  },
  cityName: {
    fontSize: 48,
    color: '#F6F6F6'
  },
  currentTemp: {
    fontSize: 32,
    color: '#F6F6F6'
  }
}

export default Header;
