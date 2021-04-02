import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C1B32'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,

    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    button: {
        alignItems: 'center',
        marginTop: 5
    },
    signup: {
        width: 325,
        height: 45,
        marginLeft: 15,
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 5,
    },
    button_text: {
        textAlign: 'center',
        color: '#009387',
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold'

    }
})
export default styles;