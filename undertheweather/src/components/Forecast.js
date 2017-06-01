import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import NavBar from './NavBar';
import Header from './Header';
import Body from './Body';

class Forecast extends React.Component {

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <NavBar navigation={this.props.navigation}/>
        <Header />
        <Body />
      </View>
    )
  }

}

const styles = {
  container: {
    // backgroundColor: 'rgba(11, 78, 186, 0.6)'
  }
}

export default Forecast;
