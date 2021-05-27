import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Appbar } from 'react-native-paper'
import { colors } from 'react-native-elements'

import BigSpacer from '../components/BigSpacer'

const AccountScreen = ({ navigation }) => {

  return (
    <>
     <Text>This will be the account screen</Text>
     <Appbar style={styles.appBar}>
        <Appbar.Action
          size={30}
          icon="food"
          onPress={() => navigation.navigate('Fit')}
        />
        <BigSpacer />
        <Appbar.Action
          size={30}
          icon="weight-lifter" 
          onPress={() => navigation.navigate('Lifties')} 
        />
        <BigSpacer />
        <Appbar.Action
          size={30}
          icon="account"
          onPress={() => navigation.navigate('Account')}
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

export default AccountScreen