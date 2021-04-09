import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home/Home';
import Setting from '../SettingScreen/Setting'
import MainTab from '../BottomTab/MainTab';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
    return (

        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
            <Drawer.Screen name="Home" component={MainTab} />
        </Drawer.Navigator>

    );

}

