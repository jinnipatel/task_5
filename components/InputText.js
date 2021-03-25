import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/AntDesign';

class InputText extends Component {


    render() {
        return (
            <View>
                <View style={styles.inputContainer}>
                    <Icons name={this.props.iconsname} />
                    <Icon name={this.props.Iconname} size={28} color="#000" style={styles.iconStyle} />
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        style={styles.inputStyle}
                        placeholder={this.props.placeholder}
                        secureTextEntry={Boolean(this.props.secureTextEntry)}
                        onChangeText={this.props.onChangeText}
                        value={this.props.value} />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        width: 250
    },
    iconStyle: {
        marginRight: 20,
        marginTop: 7
    },
    inputStyle: {
        fontSize: 20,


    }

})
export default InputText
