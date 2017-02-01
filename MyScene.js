import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Current Scene: {this.props.title}</Text>

        <TouchableHighlight onPress={this.props.onForward} style={styles.btn}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack} style={styles.btn}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

var styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: 'red',
    borderColor: 'blue',
    borderWidth: 1,
  },
  text: {
    padding: 10,
    backgroundColor: 'green',
    borderColor: 'blue',
    borderWidth: 1,
  }
});