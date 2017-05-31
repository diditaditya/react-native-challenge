import React from 'react';
import { Provider, connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import HomeScreen from './components/HomeScreen';

import store from './store/configureStore';
// import { getCurrentCoordinate } from './store/Geolocation/action';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
        <View style={{flex:1}}>
          <HomeScreen/>
          {/* <Header/>
          <Body /> */}
        </View>
    )
  }

  componentDidMount() {
    // this.props.setCurrentLocation();
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     setCurrentLocation: () => dispatch(getCurrentCoordinate())
//   });
// }

// connect(null, mapDispatchToProps)(App);

const AppWithStore = (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
