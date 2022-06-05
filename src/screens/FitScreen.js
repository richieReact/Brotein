import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from 'react-native-elements'
import { Appbar, withTheme } from 'react-native-paper'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ProteinCard from '../components/ProteinCard'
import BigSpacer from '../components/BigSpacer'
import Spacer from '../components/Spacer'
import Water from '../components/Water'
import Measure from '../components/Measure'

const FitScreen = ({ navigation }) => {
  return (
    <>
      <KeyboardAwareScrollView>
        <ProteinCard />
        <Spacer />
        <Water />
        <Spacer />
        <Measure />
      </KeyboardAwareScrollView>
      <Appbar style={styles.appBar}>
        <Appbar.Action size={30} icon='food' onPress={() => navigation.navigate('Fit')} />
        <BigSpacer />
        <Appbar.Action style={{ top: 3 }} size={30} icon='weight-lifter' onPress={() => navigation.navigate('Lifties')} />
      </Appbar>
    </>
  )
}

FitScreen.navigationOptions = () => {
  return {
    title: 'Brotein',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 28,
    },
  }
}

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    color: colors.primary,
    height: 88,
    justifyContent: 'center',
  },
})

export default withTheme(FitScreen)
