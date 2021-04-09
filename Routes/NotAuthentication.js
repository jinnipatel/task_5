import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/Login/Login';
import Signup from '../screen/Signup/Signup';
import Auth from '../Authentication/Auth'


const Stack = createStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default NotAuthenticated;