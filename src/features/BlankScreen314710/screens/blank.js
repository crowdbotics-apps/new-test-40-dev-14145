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
    <View>
      <Button title="Press me!12345" onPress={() => alert("Pressed!")} />
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
  Button_5: {}
})
