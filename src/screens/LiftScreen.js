import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withTheme, Appbar } from 'react-native-paper'
import { colors } from 'react-native-elements'

import LiftTable from '../components/LiftTable'
import BigSpacer from '../components/BigSpacer'

const LiftScreen = ({ navigation }) => {
  
  return (
    <>
      <LiftTable />
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

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    color: colors.primary,
    height: 88,
    justifyContent: 'center'
  }
})

export default withTheme(LiftScreen)