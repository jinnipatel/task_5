import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputText from '../../components/InputText';
import ButtonComp from '../../components/ButtonComp';
import styles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';



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
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <ImageBackground
                    source={require('../../assets/Img/bg2.jpg')}
                    style={{ height: '100%', opacity: 10 }}>
                    <View style={styles.container} >
                        {/* <ImageBackground source={require("../../assets/Img/bg1.jpg")} style={{ width: 100, height: 100 }}> */}
                        <View style={styles.header}>
                            {/* <Image source={require("../../assets/Img/img.jpg")} style={{ width: 150, height: 150, alignSelf: 'center', borderRadius: 100, marginTop: 60, position: 'relative' }} /> */}
                            {/* <Text style={styles.user_txt}>User Details</Text> */}
                        </View>
                        <Animatable.View animation="fadeInLeft" iterationDelay={1000} style={styles.footer}>

                            <Animatable.Image animation="flipInX" source={require("../../assets/Img/img.jpg")} style={{ width: 150, height: 150, borderRadius: 100, position: 'absolute', marginLeft: 100, marginTop: -180 }} />

                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color="#fff"
                                    size={20}
                                    style={{ marginTop: 15 }}
                                />
                                <InputText placeholder="First Name" Iconname="person" value={this.state.firstName} placeholderTextColor="#fff" />
                            </View>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color="#fff"
                                    size={20}
                                    style={{ marginTop: 15 }}
                                />
                                <InputText placeholder="Last Name" Iconname="person" value={this.state.lastName} placeholderTextColor="#fff" />
                            </View>
                            <View style={styles.action}>
                                <Fontisto
                                    name="email"
                                    color="#fff"
                                    size={20}
                                    style={{ marginTop: 15 }}
                                />
                                <InputText placeholder="Email" Iconname="email" value={this.state.email} placeholderTextColor="#fff" />
                            </View>
                            <View style={styles.action}>
                                <Feather
                                    name="phone"
                                    color="#fff"
                                    size={20}
                                    style={{ marginTop: 15 }}
                                />
                                <InputText placeholder="Phone" Iconname="phone" value={this.state.phone} placeholderTextColor="#fff" />
                            </View>
                            <View style={styles.button}>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <LinearGradient
                                        colors={['#0C1B32', '#01ab9d']}
                                        style={styles.signIn}
                                    >
                                        <Text style={styles.textSign}>LogOut</Text>

                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </Animatable.View>
                        {/* </ImageBackground> */}
                    </View >
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}
