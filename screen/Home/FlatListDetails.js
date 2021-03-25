import React from 'react'
import { Image, View, Text } from 'react-native'


export default function FlatListDetails(props) {
    const { image, name, email } = props.route.params;
    //    const a = JSON.parse(item);
    // const [item, setItem] = useState('')
    // setItem()
    // console.log("xyz", item)


    return (
        <View>
            <Image source={image}></Image>
            <Text>{name}</Text>
            <Text>{email}</Text>


        </View>
    )
}
