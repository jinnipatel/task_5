import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


export default class ButtonComp extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
          <Text style={styles.text} >{this.props.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    width: 260,
    height: 45,
    marginTop: 20,

  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    color: 'white',
    fontSize: 16
  }
})


