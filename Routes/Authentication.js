
import 'react-native-gesture-handler';
import React from 'react';
import Login from './screen/Login/Login';
import Signup from './screen/Signup/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home/Home';
import SplashScreen from './screen/Splash/SplashScreen';
import Auth from './Authentication/Auth'
import Details from './screen/Details/Details';
import FlatListDetails from './screen/Home/FlatListDetails';
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native';
const Stack = createStackNavigator();
export const Authentication = () => {
    return (
        // <SplashScreen/>
        <NavigationContainer>
            <Stack.Navigator  >
                <Stack.Screen name="Splash_Screen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}



