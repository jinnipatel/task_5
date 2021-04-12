import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Setting from '../SettingScreen/Setting';




const Tab = createMaterialBottomTabNavigator();



function MainTab() {
    return (
        <Tab.Navigator
            activeColor="#fff"
            barStyle={{ backgroundColor: '#31726A' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" color="#fff" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: 'setting',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="gear" color="#fff" size={26} />
                    )
                }} />
            {/* <Tab.Screen
                name="FlatListDetails"
                component={FlatListDetails}
                options={{
                    tabBarLabel: 'FlatListDetails',
                    tabBarIcon: ({ color }) => {
                        <MaterialCommunityIcons name="FlatListDetails" color={color} size={26} />
                    }
                }} /> */}
        </Tab.Navigator>
    );
}
export default MainTab;