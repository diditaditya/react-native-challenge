import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import NavBar from './NavBar';
import Header from './Header';
import Body from './Body';

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wallpaper: require('../images/beautiful_light_blue_sky-wallpaper-480x800.jpg')
    }
  }

  render() {
    console.log(this.props);
    return (
      <Image source={this.state.wallpaper} style={styles.container}>
        <NavBar navigation={this.props.navigation}/>
        <Header />
        <Body />
      </Image>
    )
  }

  componentWillMount() {
    if(this.props.wallpaper) {
      let image = this.props.wallpaper;
      this.setState({
        wallpaper: require(image)
      });
    }
  }

}

const styles = {
  container: {
    // backgroundColor: 'rgba(11, 78, 186, 0.6),'
    flex: 1,
    width: null,
    height: null
  }
}

const mapStateToProps = (state) => {
  return ({
    wallpaper: state.Geolocation.selectedWallpaper
  });
}

export default connect(mapStateToProps, null)(Forecast);
