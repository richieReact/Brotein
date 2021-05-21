import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from 'react-native-elements'
import { Appbar, withTheme } from 'react-native-paper'

import ProteinCard from '../components/ProteinCard'
import BigSpacer from '../components/BigSpacer'
import Spacer from '../components/Spacer'
import Water from '../components/Water'

const FitScreen = ({ navigation }) => {

  return (
    <>
      <ProteinCard />
      <Spacer />
      <Water />
      <Appbar style={styles.appBar}>
        <Appbar.Action
          icon="account"
          onPress={() => navigation.navigate('Account')}
        />
        <BigSpacer />
        <Appbar.Action
          icon="weight-lifter" 
          onPress={() => navigation.navigate('Lifties')} 
        />
        <BigSpacer />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log('Pressed delete')}
        />
      </Appbar>
    </>
  )
}

FitScreen.navigationOptions = () => {
  return {
    title: 'Brotein, your simple fitness tracker'
  
  }
}

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    color: colors.primary,
    height: 70,
    justifyContent: 'center'
  }
})

export default withTheme(FitScreen)