import { View, Text, Image, ImageBackground } from 'react-native'
import { Global } from '../../constants/styles/Global'
import { RoomsStyle } from '../../constants/styles/Rooms'

function WOF() {
  return (
    <View>
      {/* <img /> */}
      <Image source={require("../../assets/wofd.png")} style={{ width: "100%", height: 200, marginTop: 10, marginBottom: 5 }} />
      {/* <Text style={}>Inside</Text> */}
    </View>
  )
}

export default WOF