import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Appbar, TextInput, Modal, Provider, Portal, Menu, withTheme, Button } from 'react-native-paper'
import { colors } from 'react-native-elements'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'

import BigSpacer from '../components/BigSpacer'

const AccountScreen = ({ navigation, theme }) => {
  const [markedDates, setMarkedDates] = useState([{}])
  const [menu, setMenu] = useState(false)
  const [workoutType, setWorkoutType] = useState('')
  const [visible, setVisible] = useState(false)
  const [workoutView, setWorkoutView] = useState(false)
  const [date, setDate] = useState('')

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const { colors } = theme

  const STORAGE_KEY = '@save_markedDates'

  useEffect(() => {}, [])

  const _format = 'YYYY-MM-DD'

  const saveWorkout = () => {
    let marked = true
    let selected = true
    let workout = workoutType

    const updatedMarkedDates = { ...markedDates, ...{ [date]: { marked, selected, workout } } }
    setMarkedDates({ ...markedDates, ...updatedMarkedDates })
    hideModal()
  }

  const dayEvents = (date) => {
    const _selectedDay = moment(date).format(_format)

    let marked = true
    let selected = true
    let workout = workoutType

    if (markedDates[_selectedDay] && workoutView) {
      setWorkoutView(false)
    } else if (markedDates[_selectedDay]) {
      setWorkoutView(true)
    } else {
      showModal()
    }

    // this is a way to create a new object to be pushed onto the dates
    // could I attach a workout form to this object this pops up on press?
    // const updatedMarkedDates = { ...markedDates, ...{ [_selectedDay]: { marked, selected, workout } } }

    setDate(_selectedDay)

    // setMarkedDates({ ...markedDates, ...updatedMarkedDates })
    // console.log(markedDates)
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

  // the bottom half of the screen
  const workoutMenu = () => {
    return (
      <View>
        <Text>{workoutType}</Text>
        <Text></Text>
      </View>
    )
  }

  return (
    <>
      <Provider>
        <Portal>
          <Text style={{ alignSelf: 'center', margin: 15, fontSize: 25 }}>Track your Workouts</Text>
          <View>
            <Calendar
              onDayPress={(day) => dayEvents(day.dateString)}
              onDayLongPress={(day) => deleteDay(day.dateString)}
              markedDates={markedDates}
            />
          </View>
          {workoutView ? (
            <>
              <Text>{date}</Text>
              <Text>{workoutType}</Text>
            </>
          ) : null}

          {menu ? workoutMenu() : null}

          {/* The modal */}
          <Modal
            visible={visible}
            onDismiss={() => {
              hideModal()
            }}
          >
            <View style={{ alignSelf: 'center', width: '60%', alignContent: 'center', justifyContent: 'center', marginTop: -45 }}>
              <Menu
                anchor={
                  <>
                    <TextInput
                      onChangeText={setWorkoutType}
                      label='Type of workout?'
                      selectionColor={colors.primary}
                      underlineColor={colors.primary}
                      activeUnderlineColor={colors.primary}
                      outlineColor={colors.primary}
                      activeOutlineColor='black'
                      theme={{ colors: { outlineColor: colors.primary, primary: colors.primary } }}
                    />
                    <Button mode='contained' bold color={colors.primary} onPress={saveWorkout}>
                      Save Workout
                    </Button>
                  </>
                }
              />
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

export default withTheme(AccountScreen)
