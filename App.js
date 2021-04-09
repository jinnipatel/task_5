/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { RootNavigator } from './Routes';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <RootNavigator />
    </View>
  );
}
export default App;





