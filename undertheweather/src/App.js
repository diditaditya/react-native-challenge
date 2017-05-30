import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header/>
          <Body />
      </ScrollView>
    )
  }
}

export default App;
