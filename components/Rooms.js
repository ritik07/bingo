import React, { useState } from "react";
import { View, Text, FlatList, Button, Modal, TouchableOpacity } from "react-native";
import { Global } from "../constants/styles/Global";
import { RoomsStyle } from '../constants/styles/Rooms';
import { Ionicons } from "@expo/vector-icons"
import CountDown from 'react-native-countdown-component';
import { GlobalStyles } from "../constants/styles/color";
import ModalRoom from "./Rooms/ModalRoom";

function Rooms() {
  const [modalVisible, setModalVisible] = useState(false)

  const Rooms = [
    { name: "Classic Bingo", tag: "Win up to -> 80% of", image: "", description: "lorem", cost: 50, id: 1 },
    { name: "Royal Bingo", tag: "Win up to -> 90% of", image: "", description: "lorem", cost: 100, id: 2 },
    { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 3 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 4 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 6 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 7 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 8 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 9 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 10 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 11 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 12 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 13 },
    // { name: "Super Bingo", tag: "Win up to -> 85% of", image: "", description: "lorem", cost: 150, id: 14 },
  ]

  const Cards = ({ item }) => {
    return (
      <View>
        <View style={RoomsStyle.card}>
          {/* <View style={{ position: "absolute", top: 1, right: 1 }}>
            <Ionicons name="information-circle" size={14} color={'#868B8E'} />
          </View> */}
          <View style={Global.hrz_center}>
            <Text style={[RoomsStyle.title, Global.hrz_center]} numberOfLines={2}>
              {item.name} for {""}
              <Text style={{
                // color: GlobalStyles.colors.secondary20,
                fontWeight: "800"
              }}>
                {item.cost}
              </Text>
            </Text>
            <Text style={RoomsStyle.tag}>
              {item.tag.split("->")[0].toUpperCase()}
            </Text>
            <Text style={RoomsStyle.collection}>
              {item.tag.split("->")[1]}  <Ionicons name="cash-outline" size={15} color={'#F3752B'} />
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={RoomsStyle.play}>
                Play Now
              </Text>
            </TouchableOpacity>

            {/* <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <CountDown
                style={{ marginTop: 14 }}
                timeToShow={['M', 'S']}
                until={15}
                // onFinish={() => alert('finished')}
                // onPress={() => alert('hello')}
                size={12}
              />
            </View> */}
          </View>
        </View>
        {modalVisible ?
          <ModalRoom modalVisible={modalVisible} setModalVisible={(value) => setModalVisible(value)} />
          : null}
      </View >
    )
  }

  return (
    <View style={[Global.hrz_center, Global.mb_270]}>
      <FlatList numColumns={3} style={Global.row} data={Rooms} renderItem={Cards} keyExtractor={item => item.id} />
    </View>
  )

}

export default Rooms