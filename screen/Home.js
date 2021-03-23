
import React, { Component } from 'react'
import { View, FlatList, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert, Button } from 'react-native'
import flatlistData from './flatlistData'
import Icon from 'react-native-vector-icons/MaterialIcons'







class FlatListItem extends Component {


    render() {

        return (

            <TouchableOpacity
                onPress={this.props.onPress}>
                <View style={{
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
                    backgroundColor: this.props.index % 2 == 0 ? 'lightblue' : '#999999'

                }} >

                    <Image source={{ uri: this.props.item.image }}
                        style={{ width: 100, height: 100, margin: 5 }} >

                    </Image>
                    <View style={{ flexDirection: 'column' }}  >
                        <Text style={styles.flatlistitem}>{this.props.item.name}</Text>
                        <Text style={styles.flatlistitem}>{this.props.item.email}</Text>
                    </View>
                    <Icon name='chevron-right' size={40} style={styles.rightIcon}
                        onPress={() => { this.state.name, this.state.email, this.state.image }} />

                </View>
            </TouchableOpacity >



        )
    }
}

const styles = StyleSheet.create({
    flatlistitem: {
        padding: 10,
        fontSize: 18
    },
    rightIcon: {
        margin: 30,
        textAlign: 'right'
    }
})


export default class Home extends Component {


    render() {

        return (

            <View style={{ marginTop: 22, marginBottom: 10 }}>

                <FlatList
                    data={flatlistData}
                    renderItem={({ item, index }) => {

                        return (

                            <FlatListItem
                                item={item}
                                index={index}
                                onPress={() => this.props.navigation.navigate("Details")}
                            />
                        )
                    }}>

                </FlatList>

            </View>

        )
    }
}
