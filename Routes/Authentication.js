import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from '../screen/BottomTab/MainTab';
import Details from '../screen/Details/Details';
import FlatListDetails from '../screen/Home/FlatListDetails';
import Setting from '../screen/SettingScreen/Setting';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screen/Home/Home';
import DrawerScreen from '../screen/Drawer/Drawer';




const Stack = createStackNavigator();

const Authenticated = () => {
    return (

        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={DrawerScreen} options={{ headerShown: false }} options={({ navigation }) => ({
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#31726A',
                },
                headerTintColor: '#fff',
                headerRight: () => (

                    <Icon name="md-person-circle-outline" size={40} color="#fff" onPress={() => navigation.navigate("Details")} />

                )

            })} />
            {/* <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} /> */}
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
    );
}

export default Authenticated;
