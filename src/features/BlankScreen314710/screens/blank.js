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

  state = { Switch_7: false, Switch_9: true }

  render = () => (
    <View>
      <Switch
        trackColor={{ true: "#6b42ff", false: "#C0CCDA" }}
        style={styles.Switch_7}
        value={this.state.Switch_7}
        onValueChange={nextChecked => this.setState({ Switch_7: nextChecked })}
      />
      <Switch
        trackColor={{ true: "#409EFF", false: "#C0CCDA" }}
        style={styles.Switch_9}
        value={this.state.Switch_9}
        onValueChange={nextChecked => this.setState({ Switch_9: nextChecked })}
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button
        title="Press me!"
        style={styles.Button_13}
        onPress={() => alert("Pressed!")}
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
  Button_13: { color: "#f31b1b", borderColor: "#c51616" }
})
