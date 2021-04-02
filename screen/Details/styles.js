import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#0C1B32"
    },
    header: {
        flex: 2,
        // backgroundColor: "#0C1B32",
        borderTopStartRadius: 100,
        borderTopEndRadius: 100

    },
    footer: {
        // flex: 5,
        borderColor: "#fff",
        borderWidth: 2,
        borderTopStartRadius: 50,
        borderBottomEndRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        marginHorizontal: 15,
        marginBottom: 30,
        marginTop: -70,
        padding: 10,



    },
    user_txt: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 20,
        color: "#fff",
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginLeft: 20,
        color: "#fff",
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    // Button: {
    //     alignItems: 'flex-end',
    //     marginTop: 30
    // },
    signIn: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'

    },
    font: {
        color: "#fff"
    }

})
export default styles;
