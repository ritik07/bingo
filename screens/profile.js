import React from 'react';
import { View, Text, Button } from 'react-native'
import { Global } from '../constants/styles/Global'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile(props) {
  const logoutUser = () => {

    const removeValue = async () => {
      try {
        await AsyncStorage.removeItem('@login_status')
      } catch (e) {
        // remove error
      }
      console.log('Done.')
      props.navigation.navigate('login');
    }
    removeValue()
  }
  return (
    <>
      <View>
        <View style={[Global.mt_15]}>
          <Button title='Logout' color="#4EA5D9" onPress={logoutUser} />
        </View>
      </View>
    </>
  )
}

export default Profile