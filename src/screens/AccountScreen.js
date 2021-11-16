import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Appbar, TextInput, Modal, Provider, Portal, Menu } from 'react-native-paper'
import { colors } from 'react-native-elements'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'

import BigSpacer from '../components/BigSpacer'

const AccountScreen = ({ navigation }) => {
  const [markedDates, setMarkedDates] = useState([{}])
  const [menu, setMenu] = useState(false)
  const [workoutType, setWorkoutType] = useState('')
  const [visible, setVisible] = useState(false)
  const [workoutView, setWorkoutView] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

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
    // setMenu(true)
    // showModal()

    const _selectedDay = moment(date).format(_format)

    let marked = true
    let selected = true
    let workout = workoutType

    // // this is the toggle, this checks if the date is already marked and switches it
    // if (markedDates[_selectedDay]) {
    //   marked = !markedDates[_selectedDay].marked
    //   selected = !markedDates[_selectedDay].selected
    // }

    if (markedDates[_selectedDay] && workoutView) {
      setWorkoutView(false)
    } else if (markedDates[_selectedDay]) {
      setWorkoutView(true)
    }

    // this is a way to create a new object to be pushed onto the dates
    // could I attach a workout form to this object this pops up on press?
    const updatedMarkedDates = { ...markedDates, ...{ [_selectedDay]: { marked, selected, workout } } }

    setMarkedDates({ ...markedDates, ...updatedMarkedDates })
    console.log(markedDates)
  }

  // const workoutMenu = () => {
  //   return <TextInput label='Type of Workout?' />
  // }

  const workoutMenu = () => {
    return (
      <View>
        <Text>{workoutType}</Text>
      </View>
    )
  }
  const deleteDay = (date) => {
    const _selectedDay2 = moment(date).format(_format)
    let marked = true
    let selected = true

    if (markedDates[_selectedDay2]) {
      setWorkoutView(false)

      marked = !markedDates[_selectedDay2].marked
      selected = !markedDates[_selectedDay2].selected

      const updatedMarkedDates = { ...markedDates, ...{ [_selectedDay2]: {} } }

      setMarkedDates({ ...markedDates, ...updatedMarkedDates })

      console.log('I got through deleteDay')
    }
  }

  return (
    <>
      <Provider>
        <Portal>
          <Text style={{ alignSelf: 'center', margin: 15, fontSize: 25 }}>Track your Workouts</Text>
          <View style={{ alignSelf: 'center', width: '35%', textAlign: 'center' }}>
            <TextInput label='Workout Type' onChangeText={setWorkoutType} dark />
          </View>
          <View>
            <Calendar
              onDayPress={(day) => dayEvents(day.dateString)}
              onDayLongPress={(day) => deleteDay(day.dateString)}
              markedDates={markedDates}
            />
          </View>
          {workoutView ? <Text>{workoutType}</Text> : null}

          {menu ? workoutMenu() : null}
          <Modal
            visible={visible}
            onDismiss={() => {
              hideModal()
            }}
          >
            <View style={{ alignSelf: 'center', width: '60%', alignContent: 'center', justifyContent: 'center', marginTop: -45 }}>
              <Menu anchor={<TextInput onChangeText={setWorkoutType} label='Type of workout?' />}></Menu>
            </View>
          </Modal>
        </Portal>
      </Provider>

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
