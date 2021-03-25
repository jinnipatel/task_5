import React, { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputText from '../components/InputText';
import ButtonComp from '../components/ButtonComp';


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
                <Image source={require("../assets/Img/images.jpg")} style={{ width: 150, height: 150, alignSelf: 'center', borderRadius: 100, marginTop: 50 }} />
                <Text style={{ fontSize: 25, alignSelf: 'center', marginTop: 20 }}>User Details</Text>
                {/* <TextInput placeholder="First Name" value={this.state.firstName} style={{ margin: 5, marginLeft: 100 }}></TextInput>
                <TextInput placeholder="Last Name" value={this.state.lastName} style={{ margin: 5 }}></TextInput>
                <TextInput placeholder="Email" value={this.state.email} style={{ margin: 5 }}></TextInput>
                <TextInput placeholder="Phone" value={this.state.phone} style={{ margin: 5 }}></TextInput> */}
                <View style={{ marginLeft: 80 }}>
                    <InputText placeholder="First Name" Iconname="person" value={this.state.firstName} />
                    <InputText placeholder="Last Name" Iconname="person" value={this.state.lastName} />
                    <InputText placeholder="Email" Iconname="email" value={this.state.email} />
                    <InputText placeholder="Phone" Iconname="phone" value={this.state.phone} />
                    <ButtonComp name="Logout" />
                </View>


            </View >
        )
    }
}
