import React from "react"
import { View, Text } from "react-native";
import { Global } from "../constants/styles/Global";
import { Ionicons } from "@expo/vector-icons"
import CountDown from 'react-native-countdown-component';
import { UserWelcomeStyle } from "../constants/styles/UserWelcome";

function UserWelcome() {
  return (
    <View>
      {/* welcome and points */}
      <View>
        <View style={Global.row}>
          <Ionicons name="person-circle-sharp" size={38} color={'#4EA5D9'} />
          <View>
            <Text style={Global.label_w_900}>
              Hi, Ritik! Your points:
            </Text>
            <View style={Global.vt_center}>
              <Ionicons name="cash-outline" size={20} color={'#4EA5D9'} />
              <Text style={Global.f_w_100}>
                {" "}1000
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={Global.bingo_branding_10}>
          Bingo
        </Text>
        <Text style={Global.bingo_home_tag}>
          Win points, game starts in every 30 min
        </Text>
        {/* timer */}
        {/* <CountDown
          timeToShow={['M', 'S']}
          until={15}
          onFinish={() => alert('finished')}
          onPress={() => alert('hello')}
          size={20}
        /> */}
      </View>
    </View>
  )
}

export default UserWelcome;