import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import Icon from 'react-native-vector-icons/FontAwesome';
import Map from '../components/Map.js';
import Houses from '../components/Houses.js';
import People from '../components/People.js';
import Search from '../components/Search.js';

import * as houseActions from '../actions/houseAction';


var {
  View,
  TabBarIOS,
  Text,
  StyleSheet
} = ReactNative;


class HistorieVandring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'houseTab'
    };
  }

  render() {
    const { actions } = this.props;
    return(
      <TabBarIOS
      unselectedTintColor="black"
      tintColor="#75C2EF"
      unselectedItemTintColor="black"
      barTintColor="#FDFCFC">
       <Icon.TabBarItemIOS
          title="Kart"
          iconName="map-o"
          selectedIconName="map-o"
          selected={this.state.selectedTab === 'mapTab'}
          onPress={() => {
            this.setState({
             selectedTab: 'mapTab',
           });
         }}>
         <Map name="Kart" />
       </Icon.TabBarItemIOS>
       <Icon.TabBarItemIOS
          title="Hus"
          iconName="home"
          selectedIconName="home"
          selected={this.state.selectedTab === 'houseTab'}
          onPress={() => {
            this.setState({
            selectedTab: 'houseTab'
           });
         }}>
         <Houses
            name="Hus"
            houses={this.props.houses}
            {...actions}
            />
       </Icon.TabBarItemIOS>
       <Icon.TabBarItemIOS
          iconName="users"
          selectedIconName="users"
          title="Personer"
          selected={this.state.selectedTab === 'peopleTab'}
          onPress={() => {
            this.setState({
            selectedTab: 'peopleTab'
            });
         }}>
         <People name="Folk" />
       </Icon.TabBarItemIOS>
       <Icon.TabBarItemIOS
          iconName="search"
          selectedIconName="search"
          title="Søk"
          selected={this.state.selectedTab === 'searchTab'}
          onPress={() => {
            this.setState({
            selectedTab: 'searchTab'
           });
         }}>
         <Search name="Søk" />
       </Icon.TabBarItemIOS>
     </TabBarIOS>
    )
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'black',
    margin: 50,
  },
});


export default connect(state => ({
    houses: state.houses
  }),
  (dispatch) => ({
    actions: bindActionCreators(houseActions, dispatch)
  })
)(HistorieVandring);
