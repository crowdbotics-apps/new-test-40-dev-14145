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
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/94228506_2626628984246508_3570203556348690432_o_6eGLDRS.jpg"
        }}
      />
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
  Image_3: {}
})
