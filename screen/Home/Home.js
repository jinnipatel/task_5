
import React, { Component } from 'react'
import { View, FlatList, Text, StatusBar, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import * as Animatable from 'react-native-animatable';


export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.apicall()
    }
    async apicall() {
        let resp = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        let respjson = await resp.json()
        // console.warn(respjson)
        this.setState({ data: respjson })
    }

    render() {

        return (

            <View style={{ marginBottom: 10 }}>
                <StatusBar backgroundColor='#04336a' barStyle="light-content" />

                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => this.props.navigation.navigate("FlatListDetails", item)} >
                        <Animatable.View
                            animation="bounceInLeft"


                            style={{
                                flexDirection: 'row',
                                borderRadius: 10,
                                marginBottom: 10,
                                marginHorizontal: 10,
                                marginVertical: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.34,
                                shadowRadius: 6.27,

                                elevation: 10,
                                // backgroundColor: props.index % 2 == 0 ? 'lightblue' : '#999999'

                            }}  >

                            <Image source={{ uri: item.url }}
                                style={{
                                    width: 50, height: 50, borderRadius: 50, marginLeft: 25, marginTop: 25
                                }} >

                            </Image>
                            <Image source={{ uri: item.thumbnailUrl }}
                                style={{
                                    width: 50, height: 50, borderRadius: 50, marginLeft: 25, marginTop: 25
                                }} >

                            </Image>
                            <View style={{ flexDirection: 'row' }}   >
                                <Text style={styles.flatlistitem}>{item.title}</Text>
                                <Icon name='chevron-right' size={40} style={styles.rightIcon} />
                            </View>
                        </Animatable.View>
                    </TouchableOpacity>}
                />

            </View>

        )
    }
}
