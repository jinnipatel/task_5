import React, { Component } from 'react'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, View, Image, Text } from 'react-native'
import ButtonComp from '../components/ButtonComp'
import InputText from '../components/InputText'




// const UserInfo = { Email: 'jinni21@gmail.com', password: '12345' }

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      isEmailValidate: false,
    }
  }



  checked_filed = () => {
    const { email, password } = this.state
    if (email == "") {
      alert("please fill email ")
      return false;
    } else if (password == "") {
      alert("please fill password")
      return false;
    }
    return true;
  }

  making_api_call = () => {
    if (this.checked_filed()) {
      // alert("SuccessFully login")
      // navigation.navigate("Home")
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <SafeAreaView>
          <View>
            <Image source={require('../assets/Img/login.png')} style={{ alignSelf: 'center', marginHorizontal: 20, marginBottom: 20, width: 200, height: 50 }} />
            <InputText placeholder="Email" Iconname="email" onChangeText={(value) => { this.validate(value) }} value={this.state.Email} />
            {this.state.isEmailvalidate ? (
              <Text style={{ color: 'green' }}>
                {this.state.emailError}
              </Text>
            ) : (
              <Text style={{ color: 'green' }}>{this.state.emailError}</Text>
            )}
            <InputText placeholder="Password" Iconname="lock"
              secureTextEntry={true}
              onChangeText={(value) => this.setState({ password: value })}
              value={this.state.password} />
            {/* 
            <Text>{this.state.userName}</Text>
            <Text>{this.state.password}</Text> */}
            <ButtonComp
              name="Login"
              onPress={() => this.props.navigation.navigate('Auth', {
                email: this.state.email,
                password: this.state.password
              })} />
            <ButtonComp name="Signup" onPress={() => this.props.navigation.navigate('Signup')} />
          </View>

        </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
  // _login = async () => {
  //   if (UserInfo.Email === this.state.Email && UserInfo.password === this.state.password) {
  //     // alert('Logged In')
  //     // await AsyncStorage.setItem('isLogged', '1')
  //     this.props.navigation.navigate('Home');
  //   } else {
  //     alert('Email & Password is Incorrect');
  //   }
  // }
  validate = (value) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(value) === false) {
      console.log('Email is not Correct');
      this.setState({ email: value, emailError: 'Email is not correct' })
      return false;
    } else {
      this.setState({ email: value, emailError: 'Email is Correct' })
      console.log('Email is correct')
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
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
export default Login
