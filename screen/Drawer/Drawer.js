import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Home from '../Home/Home';
import Setting from '../SettingScreen/Setting'
import MainTab from '../BottomTab/MainTab';
import { DrawerContent } from './DrawerContent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Details from '../Details/Details';
import { Avatar, Title, Caption, Paragraph, TouchableRipple, Switch } from 'react-native-paper'


const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
    return (


        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}  >
            <Drawer.Screen name="Home" component={MainTab} />
            {/* <Drawer.Screen name="Setting" component={Setting} options={{
                title: 'Setting',
                drawerIcon: ({ color, size }) => (<Icon name="cog-outline"
                    color={color}
                    size={size} />)
            }} />
            <Drawer.Screen name="Details" component={Details} options={{
                title: "Details",
                drawerIcon: ({ color, size }) => (<Icon name="account-details-outline"
                    color={color}
                    size={size} />)
            }} /> */}
            {/* <DrawerItemList {...props} /> */}
        </Drawer.Navigator>

    );

}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },

});

