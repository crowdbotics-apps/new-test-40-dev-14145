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
      <Image />
      <Button title="Press me!123" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Button_3: {},
  Image_5: {},
  View_1: {},
  Button_3: {},
  Image_5: {},
  View_1: {},
  Button_3: {},
  Image_5: {},
  Button_6: {},
  Button_7: {},
  View_1: {},
  Button_3: {},
  Image_5: {},
  Button_6: {},
  Button_7: { color: "#df1616" },
  View_1: {},
  Button_3: {},
  Image_5: {},
  Button_6: {},
  Button_7: { color: "#df1616" },
  View_1: {},
  Button_3: {},
  Image_5: {},
  Button_6: {},
  Button_7: { color: "#df1616" },
  View_1: {},
  Button_3: {},
  Image_5: {},
  Button_6: {},
  Button_7: { color: "#df1616" },
  View_1: {},
  Button_3: {},
  Button_6: {},
  Button_7: { color: "#df1616" },
  Image_8: {},
  View_1: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  Image_3: {},
  Button_5: {},
  View_1: {},
  Image_3: {},
  Button_5: {},
  View_1: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  Image_3: {},
  View_1: {},
  Image_3: {},
  Button_5: {}
})
