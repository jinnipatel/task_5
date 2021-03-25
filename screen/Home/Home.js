
import React, { Component } from 'react'
import { View, FlatList, Text, StatusBar, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert, Button } from 'react-native'
import flatlistData from './flatlistData'
import Icon from 'react-native-vector-icons/MaterialIcons'


const FlatListItem = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
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
                backgroundColor: props.index % 2 == 0 ? 'lightblue' : '#999999'

            }}  >

                <Image source={props.item.image}
                    style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}  >

                </Image>
                <View style={{ flexDirection: 'column' }}  >
                    <Text style={styles.flatlistitem}>{props.item.name}</Text>
                    <Text style={styles.flatlistitem}>{props.item.email}</Text>

                </View>

                <Icon name='chevron-right' size={40} style={styles.rightIcon} />


            </View>
        </TouchableOpacity>




    )
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

            <View style={{ marginTop: 50, marginBottom: 10 }}>
                <StatusBar backgroundColor='#04336a' barStyle="light-content" />

                <Icon name="person" size={40} onPress={() => this.props.navigation.navigate("Details")} style={{ textAlign: 'right' }} />

                <FlatList
                    data={flatlistData}
                    renderItem={({ item, index }) => {

                        return (

                            <FlatListItem
                                item={item}
                                index={index}
                                onPress={() => this.props.navigation.navigate("FlatListDetails", item)}
                            />

                        )
                    }}>

                </FlatList>

            </View>

        )
    }
}
