import { View, Text, FlatList, Button, Modal, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { Global } from "../../constants/styles/Global";
import CountDown from 'react-native-countdown-component';
import { RoomsStyle } from "../../constants/styles/Rooms";
import { GlobalStyles } from "../../constants/styles/color";

function ModalRoom({ modalVisible, setModalVisible }) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        // onRequestClose={() => {
        //     // Alert.alert("Modal has been closed.");
        //     setModalVisible(!modalVisible);
        // }}
        >
            <View style={[styles.centeredView]}>
                <View style={[styles.modalView, Global.pos_rel]}>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{ position: "absolute", top: 15, right: 15 }}>
                        <View>
                            <Ionicons name="close-circle" size={14} color={'#868B8E'} />
                        </View>
                    </TouchableOpacity>
                    <Text style={[Global.clr_prim, Global.f_w_100, Global.f_s_20, Global.mb_15]}>
                        Rules:
                    </Text>
                    <Text style={[styles.modalText, Global.f_w_100, Global.clr_sec, Global.txt_as_s]}>
                        1. Entry points: 10 <Ionicons name="cash-outline" size={15} color={'#F3752B'} />
                    </Text>
                    <Text style={[styles.modalText, Global.f_w_100, Global.clr_sec, Global.mb_20]}>
                        2. 80% of total collection will be divided equally into 50% entries
                    </Text>
                    <Text style={[styles.modalText, Global.f_w_100, Global.clr_label]}>
                        Total Entries till now: 45
                    </Text>
                    <Text style={[styles.modalText, Global.f_w_100, Global.clr_label]}>
                        Game ends in:
                    </Text>
                    <View>
                        <CountDown
                            timeToShow={['M', 'S']}
                            until={15}
                            // timeLabels={{ m: null, s: null }}
                            // timeLabelStyle={{ display: "none" }}
                            showSeparator
                            // digitStyle={{ backgroundColor: 'none', borderWidth: 0, borderColor: 'none' }}
                            // separatorStyle={{ color: '#000' }}
                            // onFinish={() => alert('finished')}
                            // onPress={() => alert('hello')}
                            size={15}
                        />
                    </View>

                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={RoomsStyle.play}>
                            Play now for 10 <Ionicons name="cash-outline" size={15} color={"#FFF"} />
                        </Text>
                    </TouchableOpacity>
                    {/* <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable> */}
                </View>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.45,
        shadowRadius: 4,
        elevation: 1
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 3,
        marginTop: 3
        // textAlign: "center"
    }
});


export default ModalRoom