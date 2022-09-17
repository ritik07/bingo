import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import { Global } from '../../constants/styles/Global'
import { GlobalStyles } from '../../constants/styles/color'
import { RoomsStyle } from '../../constants/styles/Rooms'
import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import moduleName from '../../assets/animation/wheel.json';
function Login(props) {
  const [isSignup, setIsSignup] = useState(false);


  const handleOnNewAccount = () => {
    setIsSignup(!isSignup)
  }

  const onLogin = () => {
    console.log("heree")
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('@login_status', "true")
      } catch (e) {
        console.log("saving errrrr", e)
        // saving error
      }
    }
    storeData()
    const getData = async () => {
      try {
        console.log("once")
        const value = await AsyncStorage.getItem('@login_status')
        console.log("value", value)
        if (value !== null) {
          props.navigation.navigate('overview');
          // value previously stored
        }
      } catch (e) {
        console.log("errrrr", e)
        // error reading value
      }
    }
    getData()
  }



  return (
    <View style={[Global.hrz_center, Global.vert_center, Global.dis_flex]}>
      <View style={[Global.generic_card]}>
        <Text style={Global.bingo_branding_10}>
          Bingo
        </Text>

        {isSignup ?
          <View>
            <TextInput
              style={Global.input_style}
              placeholder="Name"
              autoComplete='name'
              // placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />

            <TextInput
              style={Global.input_style}
              placeholder="Password"
              autoComplete='password'
              // placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />

            <TextInput
              style={Global.input_style}
              placeholder="Confirm Password"
              autoComplete='password'
              // placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />

            <TextInput
              style={Global.input_style}
              autoComplete='email'
              placeholder="Email"
              // placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />

            <TextInput
              keyboardType='number-pad'
              style={Global.input_style}
              placeholder="Mobile Number"
              // placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />

            <View style={[Global.mt_15]}>
              <Button color="#4EA5D9" title='Sign up' />
            </View>
            <TouchableOpacity onPress={handleOnNewAccount}>
              <Text style={[Global.link_text, Global.mt_15]}>Already a user? Login</Text>
            </TouchableOpacity>
          </View>
          : <View>

            <TextInput
              style={Global.input_style}
              placeholder="Name"
              autoComplete='name'
              // placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />

            <TextInput
              style={Global.input_style}
              placeholder="Password"
              autoComplete='password'
              // placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />

            <View style={[Global.mt_15]}>
              <Button color="#4EA5D9" title='Login' onPress={onLogin} />
            </View>

            <TouchableOpacity onPress={handleOnNewAccount}>
              <Text style={[Global.link_text, Global.mt_15]}>New user? Create Account</Text>
            </TouchableOpacity>

          </View>}

      </View>
    </View>
  )
}

export default Login