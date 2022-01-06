import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { DataTable, withTheme, Title, Modal, Portal, Provider, Button, TextInput, Menu, Paragraph } from 'react-native-paper'

import Spacer from '../components/Spacer'

import useBenchData from '../hooks/liftHooks/useBenchData'
import useBenchRepsData from '../hooks/liftHooks/useBenchRepsData'
import useSquatData from '../hooks/liftHooks/useSquatData'
import useSquatRepsData from '../hooks/liftHooks/useSquatRepsData'
import useBarbellRowData from '../hooks/liftHooks/useBarbellRowData'
import useBarbellRowRepsData from '../hooks/liftHooks/useBarbellRowRepsData'
import useBarbellPressData from '../hooks/liftHooks/useBarbellPressData'
import useBarbellPressRepsData from '../hooks/liftHooks/useBarbellPressRepsData'
import useDeadliftData from '../hooks/liftHooks/useDeadliftData'
import useDeadliftRepsData from '../hooks/liftHooks/useDeadliftRepsData'

const LiftTable = ({ theme }) => {
  const [benchWeight, setBenchWeight, readBenchWeightData, onSubmitBenchWeight, onChangeBenchWeightText] = useBenchData()

  const [benchReps, setBenchReps, readBenchRepsData, onSubmitBenchReps, onChangeBenchRepsText] = useBenchRepsData()

  const [squatWeight, setSquatWeight, readSquatWeightData, onSubmitSquatWeightText, onChangeSquatWeightText] = useSquatData()

  const [squatReps, setSquatReps, readSquatRepsData, onSubmitSquatReps, onChangeSquatRepsText] = useSquatRepsData()

  const [barRowWeight, setBarRowWeight, readBarRowWeightData, onSubmitBarRowWeight, onChangeBarRowWeightText] = useBarbellRowData()

  const [barRowReps, setBarRowReps, readBarRowRepsData, onSubmitBarRowReps, onChangeBarRowReps] = useBarbellRowRepsData()

  const [barPressWeight, setBarPressWeight, readBarPressData, onSubmitBarPressWeight, onChangeBarPressWeightText] = useBarbellPressData()

  const [barPressReps, setBarPressReps, readBarPressRepsData, onSubmitBarPressReps, onChangeBarPressRepsText] = useBarbellPressRepsData()

  const [deadWeight, setDeadWeight, readDeadliftData, onSubmitDeadlift, onChangeDeadliftText] = useDeadliftData()

  const [deadReps, setDeadReps, readDeadRepsData, onSubmitDeadReps, onChangeDeadRepsText] = useDeadliftRepsData()

  const [visible, setVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [liftButton, setLiftButton] = useState(true)

  const { colors } = theme

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const containerStyle = {
    backgroundColor: 'translucent',
    margin: liftButton ? 40 : 70,
    flex: 1,
    // marginTop: 20,
    position: 'absolute',
    top: 100,
    left: 60,
    fontSize: 40,
  }
  const contentStyle = {
    fontSize: 100,
  }

  const contentStyle2 = {
    fontSize: 20,
  }

  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  const benchLiftSave = () => {
    onSubmitBenchReps()
    onSubmitBenchWeight()
    setBenchControl(false)
  }

  const squatLiftSave = () => {
    onSubmitSquatReps()
    onSubmitSquatWeightText()
    setSquatControl(false)
  }

  const barbellRowSave = () => {
    onSubmitBarRowReps()
    onSubmitBarRowWeight()
    setBarRowControl(false)
  }

  const barbellPressSave = () => {
    onSubmitBarPressReps()
    onSubmitBarPressWeight()
    setBarPressControl(false)
  }

  const deadliftSave = () => {
    onSubmitDeadReps()
    onSubmitDeadlift()
    setDeadControl(false)
  }

  useEffect(() => {
    readBenchWeightData()
    readBenchRepsData()
    readSquatWeightData()
    readSquatRepsData()
    readBarRowWeightData()
    readBarRowRepsData()
    readBarPressData()
    readBarPressRepsData()
    readDeadliftData()
    readDeadRepsData()
  }, [])

  const [benchControl, setBenchControl] = useState(false)
  const bWeightCnt = () => {
    if (benchControl) {
      return (
        <View style={{ alignContent: 'center', width: 130 }}>
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            labelStyle={{ fontWeight: 'bold', alignSelf: 'center' }}
            label='Bench Weight'
            value={benchWeight}
            onChangeText={onChangeBenchWeightText}
          />
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            label='Bench Reps'
            value={benchReps}
            onChangeText={onChangeBenchRepsText}
          />
          <Button
            labelStyle={{ fontSize: 18 }}
            style={{ height: 40, alignSelf: 'center', justifyContent: 'center', width: 130 }}
            color={colors.primary}
            mode='contained'
            onPress={() => {
              benchLiftSave()
              hideModal()
              setLiftButton(true)
            }}
          >
            Finish Up
          </Button>
        </View>
      )
    }
  }

  const [squatControl, setSquatControl] = useState(false)
  const sWeightCnt = () => {
    if (squatControl) {
      return (
        <View style={{ alignContent: 'center', width: 130 }}>
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            labelStyle={{ fontWeight: 'bold', alignSelf: 'center' }}
            label='Squat Weight'
            value={squatWeight}
            onChangeText={onChangeSquatWeightText}
          />
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            label='Squat Reps'
            value={squatReps}
            onChangeText={onChangeSquatRepsText}
          />
          <Button
            labelStyle={{ fontSize: 18 }}
            style={{ height: 40, alignSelf: 'center', justifyContent: 'center', width: 130 }}
            color={colors.primary}
            mode='contained'
            onPress={() => {
              squatLiftSave()
              hideModal()
              setLiftButton(true)
            }}
          >
            Finish Up
          </Button>
        </View>
      )
    }
  }

  const [barRowControl, setBarRowControl] = useState(false)
  const barRowWeightCnt = () => {
    if (barRowControl) {
      return (
        <View style={{ alignContent: 'center', width: 130 }}>
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            labelStyle={{ fontWeight: 'bold', alignSelf: 'center' }}
            label='Row Weight'
            value={barRowWeight}
            onChangeText={onChangeBarRowWeightText}
          />
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            label='Row Reps'
            value={barRowReps}
            onChangeText={onChangeBarRowReps}
          />
          <Button
            labelStyle={{ fontSize: 18 }}
            style={{ height: 40, alignSelf: 'center', justifyContent: 'center', width: 130 }}
            color={colors.primary}
            mode='contained'
            onPress={() => {
              barbellRowSave()
              hideModal()
              setLiftButton(true)
            }}
          >
            Finish Up
          </Button>
        </View>
      )
    }
  }

  const [barPressControl, setBarPressControl] = useState(false)
  const barPressWeightCnt = () => {
    if (barPressControl) {
      return (
        <View style={{ alignContent: 'center', width: 130 }}>
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            labelStyle={{ fontWeight: 'bold', alignSelf: 'center' }}
            label='Press Weight'
            value={barPressWeight}
            onChangeText={onChangeBarPressWeightText}
          />
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            label='Press Reps'
            value={barPressReps}
            onChangeText={onChangeBarPressRepsText}
          />
          <Button
            labelStyle={{ fontSize: 18 }}
            style={{ height: 40, alignSelf: 'center', justifyContent: 'center', width: 130 }}
            color={colors.primary}
            mode='contained'
            onPress={() => {
              barbellPressSave()
              hideModal()
              setLiftButton(true)
            }}
          >
            Finish Up
          </Button>
        </View>
      )
    }
  }

  const [deadControl, setDeadControl] = useState(false)
  const deadWeightCnt = () => {
    if (deadControl) {
      return (
        <View style={{ alignContent: 'center', width: 130 }}>
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            labelStyle={{ fontWeight: 'bold', alignSelf: 'center' }}
            label='Dead Weight'
            value={deadWeight}
            onChangeText={onChangeDeadliftText}
          />
          <TextInput
            keyboardType='number-pad'
            keyboardAppearance='dark'
            label='Dead Reps'
            value={deadReps}
            onChangeText={onChangeDeadRepsText}
          />
          <Button
            labelStyle={{ fontSize: 18 }}
            style={{ height: 40, alignSelf: 'center', justifyContent: 'center', width: 130 }}
            color={colors.primary}
            mode='contained'
            onPress={() => {
              deadliftSave()
              hideModal()
              setLiftButton(true)
            }}
          >
            Finish Up
          </Button>
        </View>
      )
    }
  }

  // Makes the menu close after selecting the lift
  const benchMenuControl = () => {
    setBenchControl(true)
    closeMenu()
  }

  const squatMenuControl = () => {
    setSquatControl(true)
    closeMenu()
  }

  const barRowMenuControl = () => {
    setBarRowControl(true)
    closeMenu()
  }

  const barPressMenuControl = () => {
    setBarPressControl(true)
    closeMenu()
  }

  const deadMenuControl = () => {
    setDeadControl(true)
    closeMenu()
  }

  //Gonna try to make a one rep max calculator; ended up finding this one
  const benchOneRepMax = () => {
    const benchMax = Math.round((100 * benchWeight) / (101.3 - 2.67123 * benchReps))
    return benchMax
  }

  const squatOneRepMax = () => {
    const squatMax = Math.round((100 * squatWeight) / (101.3 - 2.67123 * squatReps))
    return squatMax
  }

  const barRowOneRepMax = () => {
    const barRowMax = Math.round((100 * barRowWeight) / (101.3 - 2.67123 * barRowReps))
    return barRowMax
  }

  const barPressOneRepMax = () => {
    const barPressMax = Math.round((100 * barPressWeight) / (101.3 - 2.67123 * barPressReps))
    return barPressMax
  }

  const deadOneRepMax = () => {
    const deadMax = Math.round((100 * deadWeight) / (101.3 - 2.67123 * deadReps))
    return deadMax
  }

  const benchClick = () => {
    showModal()
    setLiftButton(false)
    benchMenuControl()
    closeMenu()
  }

  const squatClick = () => {
    showModal()
    setLiftButton(false)
    squatMenuControl()
    closeMenu()
  }

  const rowClick = () => {
    showModal()
    setLiftButton(false)
    barRowMenuControl()
    closeMenu()
  }

  const pressClick = () => {
    showModal()
    setLiftButton(false)
    barPressMenuControl()
    closeMenu()
  }

  const deadClick = () => {
    showModal()
    setLiftButton(false)
    deadMenuControl()
    closeMenu()
  }

  return (
    <>
      <Provider>
        <Portal>
          <Title style={{ textAlign: 'center', marginTop: 8 }}>The Staple Compound Lifts</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Exercises</DataTable.Title>
              <DataTable.Title numeric>Weight (lbs)</DataTable.Title>
              <DataTable.Title numeric>Reps</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell onPress={benchClick}>Bench Press</DataTable.Cell>
              <DataTable.Cell numeric>{benchWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{benchReps}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell onPress={squatClick}>Squat</DataTable.Cell>
              <DataTable.Cell numeric>{squatWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{squatReps}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell onPress={rowClick}>Barbell Row</DataTable.Cell>
              <DataTable.Cell numeric>{barRowWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{barRowReps}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell onPress={pressClick}>Barbell Press</DataTable.Cell>
              <DataTable.Cell numeric>{barPressWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{barPressReps}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell onPress={deadClick}>Deadlift</DataTable.Cell>
              <DataTable.Cell numeric>{deadWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{deadReps}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          <Button
            style={{ marginTop: 12.5, color: colors.primary, width: 100, alignSelf: 'center' }}
            color={colors.primary}
            contentStyle={{ color: colors.primary }}
            onPress={() => {
              showModal()
              setLiftButton(true)
            }}
            mode='text'
            compact
          >
            Edit Lifts
          </Button>

          {/* <Title style={{ textAlign: 'center' }}>1 Rep Max</Title> */}
          {/* <Paragraph style={{ textAlign: 'center' }}>Keep the reps under 12 for the most accurate calculation</Paragraph> */}
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Exercises</DataTable.Title>
              <DataTable.Title numeric>1 Rep Max</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>Bench Press</DataTable.Cell>
              <DataTable.Cell numeric>{benchOneRepMax()}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Squat</DataTable.Cell>
              <DataTable.Cell numeric>{squatOneRepMax()}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Barbell Row</DataTable.Cell>
              <DataTable.Cell numeric>{barRowOneRepMax()}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Barbell Press</DataTable.Cell>
              <DataTable.Cell numeric>{barPressOneRepMax()}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Deadlift</DataTable.Cell>
              <DataTable.Cell numeric>{deadOneRepMax()}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          {/* gotta keep this at the bottom */}
          <Modal
            visible={visible}
            onDismiss={() => {
              hideModal()
              closeMenu()
              setBenchControl(false)
              setSquatControl(false)
              setBarRowControl(false)
              setBarPressControl(false)
              setDeadControl(false)
            }}
            contentContainerStyle={containerStyle}
          >
            <View>
              <View style={styles.menu}>
                <Menu
                  style={{ marginTop: 25, marginLeft: liftButton ? 26.5 : 60, alignSelf: 'center' }}
                  visible={menuVisible}
                  onDismiss={closeMenu}
                  anchor={
                    liftButton ? (
                      <>
                        <Button
                          mode='contained'
                          color={colors.primary}
                          onPress={openMenu}
                          contentStyle={contentStyle}
                          labelStyle={{ fontSize: 24 }}
                        >
                          Which lift?
                        </Button>
                        <Spacer />
                        <Button
                          style={{ width: 100, alignSelf: 'center' }}
                          mode='contained'
                          color={colors.primary}
                          onPress={() => {
                            hideModal()
                            closeMenu()
                            setBenchControl(false)
                            setSquatControl(false)
                            setBarRowControl(false)
                            setBarPressControl(false)
                            setDeadControl(false)
                          }}
                          contentStyle={contentStyle2}
                          labelStyle={{ fontSize: 20, alignSelf: 'center' }}
                        >
                          EXIT
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          style={{ width: 90, alignSelf: 'center' }}
                          mode='contained'
                          color={colors.primary}
                          onPress={() => {
                            closeMenu()
                            setBenchControl(false)
                            setSquatControl(false)
                            setBarRowControl(false)
                            setBarPressControl(false)
                            setDeadControl(false)
                            setLiftButton(true)
                          }}
                          // contentStyle={{ marginLeft: 100 }}
                          labelStyle={{ fontSize: 20, alignContent: 'center' }}
                        >
                          EXIT
                        </Button>
                      </>
                    )
                  }
                >
                  {/* <Spacer style={{ backgroundColor: colors.primary }} /> */}
                  <View style={{ alignSelf: 'center', backgroundColor: colors.primary, fontWeight: 'bold' }}>
                    <Menu.Item
                      titleStyle={{ fontWeight: 'bold' }}
                      onPress={() => {
                        benchMenuControl()
                        closeMenu()
                        setLiftButton(false)
                      }}
                      title='Bench Press'
                    />
                    <Menu.Item
                      titleStyle={{ fontWeight: 'bold' }}
                      onPress={() => {
                        squatMenuControl()
                        closeMenu()
                        setLiftButton(false)
                      }}
                      title='Squat'
                    />
                    <Menu.Item
                      titleStyle={{ fontWeight: 'bold' }}
                      onPress={() => {
                        barRowMenuControl()
                        closeMenu()
                        setLiftButton(false)
                      }}
                      title='Barbell Row'
                    />
                    <Menu.Item
                      titleStyle={{ fontWeight: 'bold' }}
                      onPress={() => {
                        barPressMenuControl()
                        closeMenu()
                        setLiftButton(false)
                      }}
                      title='Barbell Press'
                    />
                    <Menu.Item
                      titleStyle={{ fontWeight: 'bold' }}
                      onPress={() => {
                        deadMenuControl()
                        closeMenu()
                        setLiftButton(false)
                      }}
                      title='Deadlift'
                    />
                  </View>
                </Menu>
              </View>
              {bWeightCnt()}
              {sWeightCnt()}
              {barRowWeightCnt()}
              {barPressWeightCnt()}
              {deadWeightCnt()}
            </View>
          </Modal>
        </Portal>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  menu: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
})

export default withTheme(LiftTable)
