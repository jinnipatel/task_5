import React from 'react'
import { Image, View, Text } from 'react-native'


export default function FlatListDetails(props) {
    const { url, title, thumbnailUrl } = props.route.params;


    return (
        <View>
            <Image source={{ uri: url }} style={{ width: 100, height: 100, marginTop: 50, borderRadius: 50, alignSelf: 'center' }}></Image>
            <Text style={{ alignSelf: 'center', marginTop: 10 }}>{title}</Text>
            <Image source={{ uri: thumbnailUrl }} style={{ width: 100, height: 100, marginTop: 50, borderRadius: 50, alignSelf: 'center' }}></Image>
        </View>
    )
}
