import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';
import { NoAuthentication } from './NoAuthentication';
import { Authentication } from './Authentication';


export default class index extends Component {

    state = {
        userExits: false
    }

    componentDidMount() {
        this.check();
    }
    check = async () => {
        try {
            let user = await AsyncStorage.getItem('signup_data');
            let parsed = JSON.parse(user);
            //console.log(parsed.email)
            if (parsed !== null) {
                this.setState({ userExits: true })
            }
            else {
                this.setState({ userExits: false })
            }

        }
        catch (error) {
            alert(error);
        }
    }

    render() {
        if (this.state.userExits)
            return <Authentication />
        else
            return <NoAuthentication />
    }
}
