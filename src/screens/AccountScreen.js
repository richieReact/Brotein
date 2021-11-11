import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper'
import { colors } from 'react-native-elements'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

import BigSpacer from '../components/BigSpacer'

const AccountScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ alignSelf: 'center', margin: 15, fontSize: 25 }}>Track your Workouts</Text>
      <View>
        <Calendar />
      </View>
      <Appbar style={styles.appBar}>
        <Appbar.Action size={30} icon='food' onPress={() => navigation.navigate('Fit')} />
        <BigSpacer />
        <Appbar.Action size={30} icon='weight-lifter' onPress={() => navigation.navigate('Lifties')} />
        <BigSpacer />
        <Appbar.Action size={30} icon='calendar' onPress={() => navigation.navigate('Account')} />
      </Appbar>
    </>
  )
}

AccountScreen.navigationOptions = () => {
  return {
    title: 'Calendar',
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
    height: 80,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
    height: 1000,
  },
})

export default AccountScreen
