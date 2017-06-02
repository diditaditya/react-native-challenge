import React from 'react';
import {  View, TouchableOpacity, Text , Image} from 'react-native';

import MoreDetail from './WeatherMoreDetail';

export class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    }
  }

  onPress() {
    console.log(this.state.showMore);
    if(this.state.showMore) {
      this.setState({
        showMore: false
      })
    } else {
      this.setState({
        showMore: true
      })
    }

  }

  render() {
    // console.log(this.state);
    return (
      <TouchableOpacity onPress={()=>this.onPress()} style={styles.weatherContainer}>
        <View style={styles.visible}>
          <View>
            <Text style={styles.weatherText}>{this.props.weather.date}</Text>
            <Text style={styles.weatherText}>{this.props.weather.weather.description}</Text>
          </View>
          <Image style={styles.image} source={{uri: this.props.weather.icon}}/>
        </View>
        <MoreDetail showMore={this.state.showMore} weather={this.props.weather}/>
      </TouchableOpacity>
    )
  }
}

const styles = {
  weatherContainer: {
    // backgroundColor: '#1EE494',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 10
  },
  visible: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weatherText: {
    fontSize: 24,
    // color: '#009378'
  },
  image: {
    width: 75,
    height: 75,
  }
}

export default Weather;
