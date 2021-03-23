/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';



import Login from './screen/Login';
import Signup from './screen/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import SplashScreen from './screen/SplashScreen';
import Auth from './Authentication/Auth'
import Details from './screen/Details';
const Stack = createStackNavigator();
function App() {
  return (
    // <SplashScreen/>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash_Screen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#35327d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{
          headerStyle: {
            backgroundColor: "#35327d"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


