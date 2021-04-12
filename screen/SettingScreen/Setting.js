import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native-animatable'
import FontIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image } from 'react-native'


const renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#000",
            }}
        />
    );
};

const Setting = () => {
    return (
        <View>
            <FlatList
                data={[
                    {
                        id: 1,
                        image: require('../../assets/Img/img4.png'),
                        name: "Parent Profile ",
                        FontI: "chevron-right"
                    },
                    {
                        id: 2,
                        image: require('../../assets/Img/download-removebg-preview.png'),
                        name: "Terms & conditions",
                        FontI: "chevron-right"
                    },
                    {
                        id: 3,
                        image: require('../../assets/Img/download2-removebg-preview.png'),
                        name: "Contact & FAQS",
                        FontI: "chevron-right"
                    }
                ]}
                renderItem={({ item }) => <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
                        <View>
                            <Image source={item.image} style={{ width: 50, height: 50 }}></Image>
                        </View>
                        {/* <FontIcon name={item.FontIconName} size={26} style={{ marginRight: 50, alignSelf: 'flex-start' }} /> */}
                        <View style={{ width: '48%' }}>
                            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 18 }}>{item.name}</Text>
                        </View>
                        <View>
                            <FontIcon name={item.FontI} size={50} style={{ marginLeft: 70 }} />
                        </View>
                    </View>
                </TouchableOpacity>}
                ItemSeparatorComponent={renderSeparator} />


        </View >

    )
}
export default Setting;
