import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import InputText from '../components/InputText';
import PickerExample from '../components/PickerExample';
import ButtonComp from '../components/ButtonComp';
import AsyncStorage from '@react-native-async-storage/async-storage';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      isFirstvalidate: false,
      firstnamerror: '',
      lastname: '',
      isLastvalidate: false,
      lastnamerror: '',
      email: '',
      emailError: '',
      isEmailValidate: false,
      phone: '',
      isPhoneValidate: false,
      phoneErrorValidation: '',
      password: '',
      isPasswordValidation: false,
      PasswordError: '',
      ConfirmPassword: '',
      ConPassword: '',
      isConPassword: false

    }
  }

  allFieldValidation = () => {
    const { firstname, lastname, email, phone, password, ConfirmPassword } = this.state
    if (firstname == "") {
      alert("Plz Fill UserName")
      return false;
    } else if (lastname == "") {
      alert("Plz Fill LastName")
      return false;
    } else if (email == "") {
      alert("Plz Fill Email")
      return false;
    } else if (phone == "") {
      alert("Plz Fill Phone")
      return false;
    } else if (password == "") {
      alert("Plz Fill Password")
      return false;
    } else if (ConfirmPassword == "") {
      alert("Plz Fill ConfirmPassword")
      return false;
    }
    return true
  }

  making_api_call_all_fields = () => {
    if (this.allFieldValidation()) {
      console.log('data from register - ', this.state.firstname, this.state.lastname, this.state.email, this.state.phone)
      let signup_data = { firstName: this.state.firstname, lastName: this.state.lastname, email: this.state.email, phone: this.state.phone }
      AsyncStorage.setItem('signup_data', JSON.stringify(signup_data));
      alert("SuccessFully Signup")
      this.props.navigation.navigate('Login');
    }
  }



  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View>
            <Image source={require('../assets/Img/signup-logo.png')}
              style={{ alignSelf: 'center', marginHorizontal: 20, marginTop: 10 }} />

            <InputText placeholder="First Name" Iconname="person" onChangeText={(text) => { this.validateFirstName(text) }} />
            {this.state.isFirstvalidate ? (
              <Text style={{ color: 'green' }}>
                {this.state.firstnamerror}
              </Text>
            ) : (
              <Text style={{ color: 'green' }}>{this.state.firstnamerror}</Text>
            )}
            <InputText placeholder="Last Name" Iconname="person" onChangeText={(text) => { this.validateLastName(text) }} />
            {this.state.isLastvalidate ? (
              <Text style={{ color: 'green' }}>{this.state.lastnamerror}</Text>
            ) : (
              <Text style={{ color: 'green' }}>{this.state.lastnamerror}</Text>
            )}
            <InputText placeholder="Email" Iconname="email" onChangeText={(text) => { this.validate(text) }} />
            {this.state.isEmailvalidate ? (
              <Text style={{ color: 'green' }}>
                {this.state.emailError}
              </Text>
            ) : (
              <Text style={{ color: 'green' }}>{this.state.emailError}</Text>
            )}
            <InputText placeholder="Number" Iconname="phone-android" onChangeText={(text) => { this.validatePhone(text) }} />
            {this.state.isPhoneValidate ? (
              <Text style={{ color: 'green' }}>
                {this.state.phoneErrorValidation}
              </Text>
            ) : (
              <Text style={{ color: 'green' }}>{this.state.phoneErrorValidation}</Text>
            )}
            <InputText placeholder="Password" Iconname="lock" secureTextEntry={true} onChangeText={(text) => { this.validatePassword(text) }} value={this.state.password} />
            {this.state.isPasswordValidation ? (<Text style={{ color: 'green' }}>{this.state.PasswordError}</Text>) : (<Text style={{ color: 'green' }}>{this.state.PasswordError}</Text>)}
            <InputText placeholder="Comfirm Password" Iconname="lock" secureTextEntry={true} value={this.state.ConfirmPassword} onChangeText={(value) => { this.checked_Password(value) }} />
            {this.state.isConPassword ? (<Text style={{ color: 'green' }}>{this.state.ConPassword}</Text>) : (<Text style={{ color: 'green' }}>{this.state.ConPassword}</Text>)}
            <PickerExample iconsname="flag" />
            <ButtonComp name="signup" onPress={() => this.making_api_call_all_fields()} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: text, emailError: 'Email is not correct' })
      return false;
    } else {
      this.setState({ email: text, emailError: 'Email is Correct' })
    }
  }
  validatePhone = (text) => {
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      this.setState({
        phone: text,
        phoneErrorValidation: 'Invalid number',
        isPhoneValidate: false
      });
      return false;
    } else {
      this.setState({
        phone: text,
        phoneErrorValidation: 'Valid number',
        isPhoneValidate: true
      });
      return true;
    }
  }
  validateFirstName = (text) => {
    let reg = /^[a-zA-Z]*$/;
    if (reg.test(text) === false) {
      this.setState({
        firstname: text,
        firstnamerror: 'Invalid FirstName',
        isFirstvalidate: true
      })
    } else {
      this.setState({
        firstname: text,
        firstnamerror: 'Valid FirstName',
        isFirstvalidate: true
      })
    }
  }
  validateLastName = (text) => {
    let reg = /^[a-zA-Z]*$/;
    if (reg.test(text) === false) {
      this.setState({
        lastname: text,
        lastnamerror: 'Invalid LastName',
        isLastvalidate: true
      })
    } else {
      this.setState({
        lastname: text,
        lastnamerror: 'valid LastName',
        isLastvalidate: true
      })
    }
  }
  validatePassword = (text) => {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    if (reg.test(text) == false) {
      this.setState({
        password: text,
        PasswordError: 'Invalid Password',
        isPasswordValidation: false,
      });
      return false;
    } else {
      this.setState({
        password: text,
        PasswordError: 'Valid Password',
        isPasswordValidation: true
      });
    }

  }

  checked_Password = (value) => {
    if ((this.state.password) == (this.state.ConfirmPassword)) {
      this.setState({
        ConfirmPassword: value,
        ConPassword: 'not matched',
        isConPassword: true
      })
    } else {
      this.setState({
        ConfirmPassword: value,
        ConPassword: 'matched',
        isConPassword: true
      })
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
  buttonstyle: {
    marginTop: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  button: {
    width: 260,
    height: 45,
    marginTop: 20,

  },
  text: {
    color: 'white',
    fontSize: 16
  }
})


export default Signup;
