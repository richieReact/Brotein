import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper'
import { colors } from 'react-native-elements'

import BigSpacer from '../components/BigSpacer'

const AccountScreen = ({ navigation }) => {

  return (
    <>
      <ScrollView>
      <Text>This will be the account screen</Text>
      <Text style={{ fontSize: 100 }} >HELOFEOFLE</Text>
      <Text style={{ fontSize: 100 }} >HELOFEOFLE</Text>
      <Text style={{ fontSize: 100 }} >HELOFEOFLE</Text>
      <Text style={{ fontSize: 100 }} >HELOFEOFLE</Text>
      <Text style={{ fontSize: 100 }} >HELOFEOFLE</Text>
      <Text style={{ fontSize: 100 }} >HELOFEOFLE</Text>
      <Text style={{ fontSize: 100 }} >HELOFEOFLE</Text>
      <Text style={{ fontSize: 100 }} >HELOFEOFLE</Text>
      </ScrollView>
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
    height: 80,
    justifyContent: 'center'
  },
  scroll: {
    flex: 1,
    height: 1000
  }
})

export default AccountScreen