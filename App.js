import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from './screens/dashboard';
import Profile from './screens/profile';
import { GlobalStyles } from './constants/styles/color';
import { Ionicons } from "@expo/vector-icons"
import { View } from "react-native";


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator()

const ScreenOverview = () => {
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

export default function App() {
  return (
    <>
      <View style={{ marginBottom: 30 }}>
        <StatusBar style='auto' backgroundColor='#4EA5D9' />
      </View>

      <NavigationContainer>
        <Stack.Navigator>
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
