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

        <Stack.Navigator>
            <Stack.Screen name="Home" component={DrawerScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#31726A',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (

                        <Icon name="md-person-circle-outline" size={40} color="#fff" onPress={() => navigation.navigate("Details")} />

                    )

                })} />
            {/* <Stack.Screen name="Auth" component={Auth} />  */}
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
            {/* options={{
                title: 'User Details',
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
                headerTitleStyle: {

                },
            }} /> */}
            <Stack.Screen name="FlatListDetails" component={FlatListDetails} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: true }}
                options={{

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
