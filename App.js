/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Login from './screen/Login/Login';
import Signup from './screen/Signup/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screen/Splash/SplashScreen';
import Auth from './Authentication/Auth'
import Details from './screen/Details/Details';
import FlatListDetails from './screen/Home/FlatListDetails';
import Icon from 'react-native-vector-icons/Ionicons'
import MainTab from './screen/BottomTab/MainTab'
import Setting from './screen/SettingScreen/Setting';



const Stack = createStackNavigator();

function App() {
  return (
    // <SplashScreen/>
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Splash_Screen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MainTab} options={({ navigation }) => ({
          title: 'Home',
          headerStyle: {
            backgroundColor: '#31726A',
          },
          headerTintColor: '#fff',
          headerRight: () => (

            <Icon name="md-person-circle-outline" size={40} color="#fff" onPress={() => navigation.navigate("Details")} />

          )

        })} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{
          title: 'User Details',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {

          },
        }} />
        <Stack.Screen name="FlatListDetails" component={FlatListDetails} />
        <Stack.Screen name="Setting" component={Setting} options={{
          title: 'Setting',
          headerStyle: {
            backgroundColor: '#31726A',
          },
          headerTintColor: '#fff'
        }} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
export default App;





