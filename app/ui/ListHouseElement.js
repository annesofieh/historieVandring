import React from "react";
var ReactNative = require('react-native');

var {
  View,
  Text,
  StyleSheet 
} = ReactNative;

export default class ListHouseElement extends React.Component {
  render() {
    let {house} = this.props;
    return(
      <View>
        <Text>BrNr: {house.BrNr}</Text>
        <Text>Lat: {house.Lat}</Text>
        <Text>Long: {house.Long}</Text>
        <Text>Name: {house.Name}</Text>
        <Text>Tekst: {house.Tekst}</Text>
        <Text>Id: {house._id}</Text>
      </View>
    )
  }
}
