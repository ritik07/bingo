import React from 'react';
import { View, Text } from 'react-native'
import Rooms from '../components/Rooms';
import UserWelcome from '../components/UserWelcome';
import { Global } from '../constants/styles/Global';
import { UserWelcomeStyle } from '../constants/styles/UserWelcome';
import WOF from './WOF/WOF';

function Dashboard() {
  return (
    <>
      <View>
        <View style={UserWelcomeStyle.WelcomeSection}>
          <UserWelcome />
        </View>
        <View>
          <WOF />
        </View>
        <View>
          <Rooms />
        </View>
      </View>
    </>
  )
}

export default Dashboard