import React from 'react';
import { View,
  Text,
  TouchableOpacity } from 'react-native';

class NavBar extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity><Text>Daily</Text></TouchableOpacity>
        <TouchableOpacity><Text>Hourly</Text></TouchableOpacity>
      </View>
    )
  }

}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

export default NavBar;
