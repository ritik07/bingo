import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { Global } from '../../constants/styles/Global'
import { GlobalStyles } from '../../constants/styles/color'
import { RoomsStyle } from '../../constants/styles/Rooms'
import Lottie from 'lottie-react-native';
// import moduleName from '../../assets/animation/wheel.json';
function WOF() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      {/* <img /> */}
      <View style={[Global.generic_card]}>
        <Text style={[Global.font_s_19, Global.f_w_100, { color: showText ? '#8f6deb' : '#4EA5D9' }]}>
          Try your luck with wheel of fortune
        </Text>
        <Lottie
          autoPlay={true}
          // ref={animationRef}
          style={[Global.height_20]}
          source={require('../../assets/animation/wheel.json')}
        />
      </View>

      {/* <Image source={require("../../assets/wofd.png")} style={{ width: "100%", height: 200, marginTop: 10, marginBottom: 5 }} /> */}
      {/* <Text style={}>Inside</Text> */}
    </View>
  )
}

export default WOF