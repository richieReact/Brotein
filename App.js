import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { StyleSheet, Text, View } from 'react-native';

import FitScreen from './src/screens/FitScreen'

const navigator = createStackNavigator({
  Fit: FitScreen
}, {
  initialRouteName: 'Fit',
  defaultNavigationOptions: {
    title: 'Brotein'
  }
})

const App = createAppContainer(navigator)


export default () => {
  return (
    <App />
  );
}
