var React = require('react');
var ReactNative = require('react-native');


var {
  View,
  Text,
  StyleSheet
} = ReactNative;


class Map extends React.Component{
  render() {
    let {name} = this.props;
    return (
      <View>
        <View style={styles.headerView}>
          <Text style={styles.header}>{name}</Text>
        </View>
        <View style={styles.mapView}>
          <Text style={styles.mapText}>Dette er kartsiden</Text>
        </View>
      </View>
    )

  }

}

var styles = StyleSheet.create({
  mapText: {
    margin: 50,
    fontSize: 45
  },
  header: {
    paddingTop: 10,
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headerView: {
    height: 50,
    backgroundColor: '#FDFCFC'

  },
  mapView: {

  }
})


module.exports = Map;
