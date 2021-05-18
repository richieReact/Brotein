import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from 'react-native-elements'
import { Appbar, withTheme } from 'react-native-paper'

import ProteinCard from '../components/ProteinCard'

import BigSpacer from '../components/BigSpacer'

const FitScreen = ({ navigation }) => {

  return (
    <>
      <ProteinCard />
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="account"
          onPress={() => navigation.navigate('Account')}
          />
        <BigSpacer />
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <BigSpacer />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
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
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    color: colors.primary,
    height: 65,
    justifyContent: 'center'
  }
})

export default withTheme(FitScreen)