import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../screen/Home';

export default class Auth extends Component {

    // saveData() {
    //     alert("hello");
    // }
    constructor(props) {
        super(props)
        this.state = {
            email: ' ',
            password: ' '
        }
    }
    componentDidMount() {
        const { email, password } = this.props.route.params;
        debugger
        this.setState({ email: email, password: password })
        // let obj = {
        //     name: 'jeeni',
        //     email: "jinni@gmail.com",
        //     password: '12345'
        // }
        // AsyncStorage.setItem('user', JSON.stringify(obj));
        this.check()
    }

    check = async () => {

        // debugger
        try {

            let user = await AsyncStorage.getItem('signup_data');
            console.log('data from auth -- ', user)
            let parsed = JSON.parse(user);
            console.log(this.state.email + '--' + this.state.password)
            console.log('data from auth parsed-- ', parsed.email, parsed.password)

            if (parsed.email === this.state.email && parsed.password === this.state.password) {
                // debugger
                this.props.navigation.replace('Home');
            } else {
                // debugger
                alert('Email or password is invalid');
                this.props.navigation.navigate('Login');
            }
        }

        catch (error) {
            console.log(error)
            debugger
            alert(error)
        }
    }
    render() {
        return (
            <View>

            </View>
        )
    }
}
