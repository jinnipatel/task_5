import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screen/Splash/SplashScreen';
import NotAuthenticated from './NotAuthentication';
import Authenticated from './Authentication'


const Stack = createStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SplashScreen"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="NotAuthenticated" component={NotAuthenticated} />
                <Stack.Screen name="Authenticated" component={Authenticated} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



