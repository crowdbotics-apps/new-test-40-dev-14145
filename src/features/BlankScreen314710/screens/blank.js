import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Switch_3: { alignSelf: "flex-start" },
  View_1: {},
  Switch_3: { alignSelf: "flex-start" },
  Button_5: {},
  View_1: {},
  Switch_3: { alignSelf: "flex-start" },
  Button_5: {},
  View_1: {},
  Switch_3: { alignSelf: "flex-start" },
  Button_5: {},
  View_1: {},
  Switch_3: { alignSelf: "flex-start" },
  Button_5: {},
  View_1: {},
  Switch_3: { alignSelf: "flex-start" },
  Button_5: {},
  View_1: {},
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Button_5: {},
  View_1: {},
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Button_5: {},
  View_1: {},
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start", lineHeight: 13 },
  View_1: {},
  Switch_7: { alignSelf: "flex-start", lineHeight: 12 },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start", letterSpacing: 1 },
  Switch_9: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start", letterSpacing: 0 },
  Switch_9: { alignSelf: "flex-start" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  View_1: {},
  Switch_7: { alignSelf: "flex-start", letterSpacing: 1 },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  View_1: {},
  Switch_7: { alignSelf: "flex-start", letterSpacing: 0 },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  Button_13: { color: "#f31b1b", borderColor: "#c51616" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  Button_13: { color: "#f31b1b", borderColor: "#c51616" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  Button_13: { color: "#f31b1b", borderColor: "#c51616" },
  View_1: {},
  Switch_7: { alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  Button_13: { color: "#f31b1b", borderColor: "#c51616" },
  View_1: {},
  Switch_7: { width: 50, alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  Button_13: { color: "#f31b1b", borderColor: "#c51616" },
  View_1: {},
  Switch_7: { width: 0, alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  Button_13: { color: "#f31b1b", borderColor: "#c51616" },
  View_1: {},
  Switch_7: { width: "0%", alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  Button_13: { color: "#f31b1b", borderColor: "#c51616" },
  View_1: {},
  Switch_7: { width: 0, alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Button_11: {},
  Button_13: { color: "#f31b1b", borderColor: "#c51616" },
  View_1: {},
  Switch_7: { width: 0, alignSelf: "flex-start" },
  View_1: {},
  Button_9: {},
  View_1: { fontSize: 13 },
  Button_9: {},
  View_1: { fontSize: 12 },
  Button_9: {},
  View_1: {},
  Button_9: {},
  View_1: { fontSize: 13 },
  Button_9: {},
  View_1: { fontSize: 12 },
  Button_9: {},
  View_1: { fontSize: 13 },
  Button_9: {}
})
