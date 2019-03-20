/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer,
createBottomTabNavigator} from 'react-navigation';
import Home from './screens/Home/Home';
import Favorite from './screens/Favorite/Favorite';
import History from './screens/History/History';
import MyPage from './screens/MyPage/MyPage';
import Gnar from './screens/Gnar'
import Taric from './screens/Taric'
import HomeIndex from './screens/Home/HomeIndex';
/*
export default class App extends Component{
  render() {
    return ( 
    <AppContainer/>
    );
  }
}
*/

const Tab = createBottomTabNavigator({
  Home:{
    screen:HomeIndex
  },
  Favorite:{
    screen:Favorite
  },
  History:{
    screen:History
  },
  MyPage:{
    screen:MyPage
  }
});
const App = createAppContainer(Tab);
export default App;
/*
class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
class Apple extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Gnar:Gnar,
  Taric:Taric
},{initialRouteName:'Gnar'})
const AppContainer = createAppContainer(AppStackNavigator);
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
