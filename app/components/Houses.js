var React = require('react');
var ReactNative = require('react-native');
import ListHouseElement from '../ui/ListHouseElement';


var {
  View,
  Text,
  StyleSheet,
  SectionList
} = ReactNative;


export default class Houses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    let {getHouses} = this.props;
    getHouses();
  }

  selectionList = () => {
    return([
      {data: [{title:123},{title:"aaa"}], key: "aaa"},
      {data: [{title:333},{title:"bbbb"}], key: "bbb"},
      {data: [{title:123},{title:"aaa"}], key: "ccc"},
    ])
  }

  render() {
    let {name, houses} = this.props;
    console.log("Husa:", houses);

    let newHoses = Object.keys(houses).map(key => houses[key]);

    let HouseList = newHoses.map(house => {
       return <ListHouseElement key={house._id} house={house} />
     });

    return (
      <View>
        <View style={styles.headerView}>
          <Text style={styles.header}>{name}</Text>
        </View>
        <View style={styles.mapView}>
          <Text style={styles.mapText}>Dette er hussiden</Text>

        
          {HouseList}
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


module.exports = Houses;
