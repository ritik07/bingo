import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from './screens/dashboard';
import Profile from './screens/profile';
import { GlobalStyles } from './constants/styles/color';
import { Ionicons } from "@expo/vector-icons"
import { View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './screens/login/Login';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator()

const ScreenOverview = (props) => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary10, },
        headerTintColor: GlobalStyles.colors.primary20,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary10 },
        tabBarActiveTintColor: GlobalStyles.colors.primary20,
        tabBarInactiveTintColor: GlobalStyles.colors.secondary10,
      }
      }>
      <BottomTabs.Screen name='Bingo' component={Dashboard}
        options={{
          headerShown: false,
          title: "Bingo",
          tabBarLabel: "Bingo",
          tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
        }}
      />
      <BottomTabs.Screen name='Profile' component={Profile}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name='person-circle' color={color} size={size} />
        }}
      />
    </BottomTabs.Navigator>
  )
}


// const ScreenLogin = () => {
//   return (

//     <Screen name='Login / Signup' component={Login}
//       options={{
//         headerShown: false,
//         title: "Login / Signup",
//         tabBarLabel: "Login / Signup",
//         tabBarIcon: ({ color, size }) => <Ionicons name='log-in' color={color} size={size} />
//       }}
//     />
//   )
// }

export default function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@login_status')
      console.log("value", value)
      if (value !== null) {
        setLoginStatus(true)
        // value previously stored
      } else {
        setLoginStatus(false)
      }
    } catch (e) {
      // error reading value
    }
  }


  return (
    <>
      <View style={{ marginBottom: 30 }}>
        <StatusBar style='auto' backgroundColor='#4EA5D9' />
      </View>

      <NavigationContainer>
        <Stack.Navigator>
          {!loginStatus ?
            <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
            : null}
          <Stack.Screen
            options={{ headerShown: false }}
            name="overview" component={ScreenOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
