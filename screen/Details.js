import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Details extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""

        }
    }
    componentDidMount() {
        this.data()
    }

    data = async () => {
        var user = await AsyncStorage.getItem('signup_data')
        var parsed = JSON.parse(user)
        this.setState({ firstName: parsed.firstName, lastName: parsed.lastName, email: parsed.email, phone: parsed.phone })
        AsyncStorage.setItem('signup_data', JSON.stringify(user));

    }

    render() {
        return (
            <View>
                <Text>{this.state.firstName}</Text>
                <Text>{this.state.lastName}</Text>
                <Text>{this.state.email}</Text>
                <Text>{this.state.phone}</Text>
            </View>
        )
    }
}
