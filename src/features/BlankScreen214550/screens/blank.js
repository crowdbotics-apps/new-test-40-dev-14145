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

  state = {
    CheckBox_12: true,
    DateTimePicker_15: new Date(""),
    TextInput_18: ""
  }

  render = () => (
    <View>
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/121703192_3639642716087744_5721546114126314383_o_XLbrS0d.jpg"
        }}
      />
      <Button
        title="Press me!"
        style={styles.Button_5}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="Press me!"
        style={styles.Button_7}
        onPress={() => alert("Pressed!")}
      />
      <Button title="Press me!1456" onPress={() => alert("Pressed!")} />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_12}
        onPress={nextChecked => this.setState({ CheckBox_12: nextChecked })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_15}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_15: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_18}
        onChangeText={nextValue => this.setState({ TextInput_18: nextValue })}
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
  Image_3: {},
  Button_5: {},
  View_1: {},
  Image_3: {},
  Button_5: { borderStyle: "dotted" },
  View_1: {},
  Image_3: {},
  Button_5: { borderStyle: "dotted" },
  Button_8: {},
  View_1: {},
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
  Button_5: { fontSize: 13 },
  View_1: {},
  Image_3: {},
  Button_5: { fontSize: 13 },
  Button_7: { color: "#ae1919" },
  View_1: {},
  Image_3: {},
  Button_5: { fontSize: 13 },
  Button_7: { color: "#ae1919" },
  Button_10: {},
  View_1: {},
  Image_3: {},
  Button_5: { fontSize: 13 },
  Button_7: { color: "#ae1919" },
  Button_10: {},
  CheckBox_12: {},
  View_1: {},
  Image_3: {},
  Button_5: { fontSize: 13 },
  Button_7: { color: "#ae1919" },
  Button_10: {},
  View_1: {},
  Image_3: {},
  Button_5: { fontSize: 13 },
  Button_7: { color: "#ae1919" },
  Button_10: {},
  CheckBox_12: {},
  View_1: {},
  Image_3: {},
  Button_5: { fontSize: 13 },
  Button_7: { color: "#ae1919" },
  Button_10: {},
  CheckBox_12: {},
  DateTimePicker_15: {},
  View_1: {},
  Image_3: {},
  Button_5: { fontSize: 13 },
  Button_7: { color: "#ae1919" },
  Button_10: {},
  CheckBox_12: {},
  DateTimePicker_15: {},
  TextInput_18: {},
  View_1: {},
  Image_3: {},
  Button_5: { fontSize: 13 },
  Button_7: { color: "#ae1919" },
  Button_10: {},
  CheckBox_12: {},
  DateTimePicker_15: {},
  TextInput_18: {}
})
