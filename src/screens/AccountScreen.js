import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Appbar, TextInput } from 'react-native-paper'
import { colors } from 'react-native-elements'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'

import BigSpacer from '../components/BigSpacer'

const AccountScreen = ({ navigation }) => {
  const [markedDates, setMarkedDates] = useState([{}])

  const STORAGE_KEY = '@save_dates'

  useEffect(() => {}, [])

  // idea for how to save the dates in the function below:
  // 1. Load in saved markedDates from AsyncStorage to gather the previously markedDates...
  // ... should do this on page load (useEffect), make it an array right?
  // 2. Push a new object onto the markedDates array with those props it needs
  // 3. Set the state and save it in AsyncStorage

  const _format = 'YYYY-MM-DD'

  const dayEvents = (date) => {
    // saving this for records
    // let mark = {}
    // mark[date] = {
    //   selected: true,
    //   color: '#4B0082',
    // }
    // setMarkedDates({ ...markedDates, ...mark }) // holy shit lmfao it works
    // console.log(markedDates)

    const _selectedDay = moment(date).format(_format)

    let marked = true
    let selected = true

    // this is the toggle, this checks if the date is already marks and switches it
    if (markedDates[_selectedDay]) {
      marked = !markedDates[_selectedDay].marked
      selected = !markedDates[_selectedDay].selected
    }

    // this is a way to create a new obejct to be pushed onto the dates
    // could I attach a workout form to this object this pops up on press?
    const updatedMarkedDates = { ...markedDates, ...{ [_selectedDay]: { marked, selected } } }

    setMarkedDates({ ...markedDates, ...updatedMarkedDates })
    console.log(markedDates)
  }

  return (
    <>
      <Text style={{ alignSelf: 'center', margin: 15, fontSize: 25 }}>Track your Workouts</Text>
      <View>
        <Calendar onDayPress={(day) => dayEvents(day.dateString)} markedDates={markedDates} />
      </View>

      {/* The Appbar, keep at the bottom  */}
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
