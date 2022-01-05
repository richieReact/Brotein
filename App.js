import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { StyleSheet, Text, View } from 'react-native'

import { DefaultTheme, Provider as PaperProvider, DarkTheme } from 'react-native-paper'

import FitScreen from './src/screens/FitScreen'
import LiftScreen from './src/screens/LiftScreen'

const navigator = createStackNavigator(
  {
    Fit: FitScreen,
    Lifties: LiftScreen,
  },
  {
    initialRouteName: 'Fit',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3498db',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'Georgia',
      },
    },
  }
)

const App = createAppContainer(navigator)

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
}

export default () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  )
}
