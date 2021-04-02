import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    Button,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';





function SplashScreen({ navigation }) {
    setTimeout(() => { navigation.navigate("Login") }, 3000);
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#0C1B32' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    iterationDelay={400}
                    source={require("../../assets/Img/hello1.gif")} resizeMode='center' />
            </View>
            <Animatable.View style={styles.footer}
                animation="fadeInUpBig"
                iterationDelay={400} >
                <Text style={styles.title}>Stay connected with everyone!</Text>
                <Text style={styles.text}>Sign in with account</Text>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <LinearGradient
                            colors={['#0C1B32', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                                style={{ alignSelf: 'center' }}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    )
}

export default SplashScreen;



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: "#009387"

//     },
//     header: {
//         flex: 2,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#009387',
//     },
//     footer: {
//         flex: 1,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingVertical: 50,
//         paddingHorizontal: 30
//     },
//     title: {
//         color: "#05375a",
//         fontSize: 30,
//         fontWeight: 'bold'
//     },
//     text: {
//         color: 'grey',
//         marginTop: 10,
//         fontSize: 20

//     },
//     button: {
//         alignItems: 'flex-end',
//         marginTop: 30
//     },
//     Button: {
//         alignItems: 'flex-end',
//         marginTop: 30
//     },
//     signIn: {
//         width: 150,
//         height: 40,
//         justifyContent: 'center',
//         borderRadius: 50,
//         flexDirection: 'row'
//     },
//     textSign: {
//         color: 'white',
//         fontWeight: 'bold',
//         alignSelf: 'center'

//     }



// })