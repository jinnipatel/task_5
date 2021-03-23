import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';




function SplashScreen({ navigation }) {
    setTimeout(() => { navigation.navigate("Login") }, 4000);
    return (
        // <View style={{ backgroundColor: "red" }}>
        //     <Image source={require("./assets/Img/KML23.png")} resizeMode='cover' style={{ height: 720 }} />
        // </View>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/Img/duck.gif")} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Stay connected with everyone!</Text>
                {/* <Text style={styles.text}>Sign in with account</Text> */}
                {/* <ButtonComp name="SignIn" onPress={() => navigation.navigate('Signup')} /> */}
            </View>
        </View>
    )
}

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    // logo: {
    //     width: height_logo,
    //     height: height_logo,
    //     borderRadius: 150
    // },
    title: {
        color: "#05375a",
        fontSize: 30,
        fontWeight: 'bold'
    },
    // text: {
    //     color: '#000',
    //     marginTop: 5
    // },
    // Button: {
    //     alignItems: 'flex-end',
    //     marginTop: 30
    // },
    // signIn: {
    //     width: 150,
    //     height: 40,
    //     justifyContent: 'center',
    //     borderRadius: 50,
    //     flexDirection: 'row'
    // },


})