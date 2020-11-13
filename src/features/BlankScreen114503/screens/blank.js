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
    TextInput_6: "",
    TextInput_8: "",
    DateTimePicker_10: new Date(""),
    TextInput_12: "",
    Switch_14: true,
    CheckBox_110: true,
    CheckBox_108: true
  }

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text style={styles.Text_4}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_10}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_10: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_12}
        onChangeText={nextValue => this.setState({ TextInput_12: nextValue })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_14}
        value={this.state.Switch_14}
        onValueChange={nextChecked => this.setState({ Switch_14: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_110}
        onPress={nextChecked => this.setState({ CheckBox_110: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_108}
        onPress={nextChecked => this.setState({ CheckBox_108: nextChecked })}
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
  Button_2: {},
  Button_3: {},
  Button_4: {},
  View_1: {},
  Button_2: {},
  Text_4: { textAlign: "left" },
  TextInput_6: {},
  TextInput_8: {},
  DateTimePicker_10: {},
  TextInput_12: {},
  Switch_14: { alignSelf: "flex-start" },
  CheckBox_110: {},
  CheckBox_108: {}
})
