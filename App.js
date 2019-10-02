import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

export default class DateTimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      chosenDate: ""
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = datetime => {
    this.setState({
      isDateTimePickerVisible: false,
      chosenDate: moment(datetime).format("MMM, Do YYY HH:mm")
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "blue", fontSize: 20 }}>
          {this.state.chosenDate}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.showDateTimePicker}
        >
          <Text style={styles.text}>Waktu</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode={"datetime"}
          datePickerModeAndroid={'spinner'}
          is24Hour={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center"
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#330066",
    justifyContent: "center",
    marginTop: 15
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  }
});
