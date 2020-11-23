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

  state = { Switch_13: true }

  render = () => (
    <View style={styles.View_1}>
      <Text>Sample text content</Text>
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/g14670_8652957_BfZHjmE.jpg"
        }}
      />
      <Button
        title="Press me!1234"
        style={styles.Button_11}
        onPress={() => alert("Pressed!")}
      />
      <Switch
        trackColor={{ true: "#ff42a1", false: "#0ecd3e" }}
        style={styles.Switch_13}
        value={this.state.Switch_13}
        onValueChange={nextChecked => this.setState({ Switch_13: nextChecked })}
      />
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/g14670_8652957_BfZHjmE.jpg"
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
  Text_3: {},
  View_1: {},
  Text_3: {},
  Image_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Switch_7: { alignSelf: "flex-start" },
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Switch_7: { alignSelf: "flex-start" },
  Button_11: { color: "#df0707" },
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {},
  View_1: { fontSize: 13 },
  Text_3: {},
  Image_5: {},
  Button_11: { color: "#df0707" },
  Switch_13: { alignSelf: "flex-start" },
  Image_15: {}
})
