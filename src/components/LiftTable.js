import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { DataTable, withTheme, Title, Modal, Portal, Provider, Button, TextInput, Menu, Paragraph } from 'react-native-paper'

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

const LiftTable = () => {
  const [benchWeight, setBenchWeight, readBenchWeightData, onSubmitBenchWeight, onChangeBenchWeightText] = useBenchData()

  const [benchReps, setBenchReps, readBenchRepsData, onSubmitBenchReps, onChangeBenchRepsText] = useBenchRepsData()

  const [squatWeight, setSquatWeight, readSquatWeightData, onSubmitSquatWeightText, onChangeSquatWeightText] = useSquatData()

  const [squatReps, setSquatReps, readSquatRepsData, onSubmitSquatReps, onChangeSquatRepsText] = useSquatRepsData()

  const [barRowWeight, setBarRowWeight, readBarRowWeightData, onSubmitBarRowWeight, onChangeBarRowWeightText] = useBarbellRowData()

  const [barRowReps, setBarRowReps, readBarRowRepsData, onSubmitBarRowReps, onChangeBarRowReps] = useBarbellRowRepsData()

  const [barPressWeight, setBarPressWeight, readBarPressData,onSubmitBarPressWeight, onChangeBarPressWeightText] = useBarbellPressData()

  const [barPressReps, setBarPressReps, readBarPressRepsData, onSubmitBarPressReps, onChangeBarPressRepsText] = useBarbellPressRepsData()

  const [deadWeight, setDeadWeight, readDeadliftData, onSubmitDeadlift, onChangeDeadliftText] = useDeadliftData()

  const [deadReps, setDeadReps, readDeadRepsData, onSubmitDeadReps, onChangeDeadRepsText] = useDeadliftRepsData()

  // menu state
  const [visible, setVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const containerStyle = {backgroundColor: 'white', margin: 40, flex: 1}

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
        <View>
          <TextInput 
            label='Bench Press Weight'
            value={benchWeight}
            onChangeText={onChangeBenchWeightText}
          />
          <TextInput 
            label='Bench Press Reps'
            value={benchReps}
            onChangeText={onChangeBenchRepsText}
          />
          <Button
            style={{ width: 150, alignSelf: 'center' }}
            mode='outlined'
            onPress={benchLiftSave}  
          >Finish Update</Button>
        </View>
      )
    }
  }

  const [squatControl, setSquatControl] = useState(false)
  const sWeightCnt = () => {
    if (squatControl) {
      return (
        <View>
          <TextInput 
            label='Bench Press Weight'
            value={squatWeight}
            onChangeText={onChangeSquatWeightText}
          />
          <TextInput 
            label='Bench Press Reps'
            value={squatReps}
            onChangeText={onChangeSquatRepsText}
          />
          <Button
            style={{ width: 150, alignSelf: 'center' }}
            mode='outlined'
            onPress={squatLiftSave}  
          >Finish Update</Button>
        </View>
      )
    }
  }

  const [barRowControl, setBarRowControl] = useState(false)
  const barRowWeightCnt = () => {
    if (barRowControl) {
      return (
        <View>
          <TextInput 
            label='Bench Press Weight'
            value={barRowWeight}
            onChangeText={onChangeBarRowWeightText}
          />
          <TextInput 
            label='Bench Press Reps'
            value={barRowReps}
            onChangeText={onChangeBarRowReps}
          />
          <Button
            style={{ width: 150, alignSelf: 'center' }}
            mode='outlined'
            onPress={barbellRowSave}  
          >Finish Update</Button>
        </View>
      )
    }
  }

  const [barPressControl, setBarPressControl] = useState(false)
  const barPressWeightCnt = () => {
    if (barPressControl) {
      return (
        <View>
          <TextInput 
            label='Bench Press Weight'
            value={barPressWeight}
            onChangeText={onChangeBarPressWeightText}
          />
          <TextInput 
            label='Bench Press Reps'
            value={barPressReps}
            onChangeText={onChangeBarPressRepsText}
          />
          <Button
            style={{ width: 150, alignSelf: 'center' }}
            mode='outlined'
            onPress={barbellPressSave}  
          >Finish Update</Button>
        </View>
      )
    }
  }

  const [deadControl, setDeadControl] = useState(false)
  const deadWeightCnt = () => {
    if (deadControl) {
      return (
        <View>
          <TextInput 
            label='Bench Press Weight'
            value={deadWeight}
            onChangeText={onChangeDeadliftText}
          />
          <TextInput 
            label='Bench Press Reps'
            value={deadReps}
            onChangeText={onChangeDeadRepsText}
          />
          <Button
            style={{ width: 150, alignSelf: 'center' }}
            mode='outlined'
            onPress={deadliftSave}  
          >Finish Update</Button>
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
    const benchMax = Math.round((100 * benchWeight) / (101.3 - (2.67123 * benchReps)))
    console.log(benchMax)
    return benchMax
  }

  const squatOneRepMax = () => {
    const squatMax = Math.round((100 * squatWeight) / (101.3 - (2.67123 * squatReps)))
    console.log(squatMax)
    return squatMax
  }

  const barRowOneRepMax = () => {
    const barRowMax = Math.round((100 * barRowWeight) / (101.3 - (2.67123 * barRowReps)))
    console.log(barRowMax)
    return barRowMax
  }

  const barPressOneRepMax = () => {
    const barPressMax = Math.round((100 * barPressWeight) / (101.3 - (2.67123 * barPressReps)))
    console.log(barPressMax)
    return barPressMax
  }

  const deadOneRepMax = () => {
    const deadMax = Math.round((100 * deadWeight) / (101.3 - (2.67123 * deadReps)))
    console.log(deadMax)
    return deadMax
  }

  return (
    <>
      <Provider>
        <Portal>
          <Title style={{ textAlign: 'center', marginTop: 15 }}>The Staple Compound Lifts</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Exercises</DataTable.Title>
              <DataTable.Title numeric>Weight (lbs)</DataTable.Title>
              <DataTable.Title numeric>Reps</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell onPress={showModal} >Bench Press</DataTable.Cell>
              <DataTable.Cell numeric>{benchWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{benchReps}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Squat</DataTable.Cell>
              <DataTable.Cell numeric>{squatWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{squatReps}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Barbell Row</DataTable.Cell>
              <DataTable.Cell numeric>{barRowWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{barRowReps}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Barbell Press</DataTable.Cell>
              <DataTable.Cell numeric>{barPressWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{barPressReps}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Deadlift</DataTable.Cell>
              <DataTable.Cell numeric>{deadWeight}</DataTable.Cell>
              <DataTable.Cell numeric>{deadReps}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          <Button style={{marginTop: 15  }} onPress={showModal}>
            Edit Lifts
          </Button>

          <Title style={{ textAlign: 'center' }}>1 Rep Max</Title>
          <Paragraph style={{ textAlign: 'center' }}>Keep the reps under 12 for the most accurate calculation</Paragraph>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Exercises</DataTable.Title>
              <DataTable.Title numeric>1 Rep Max</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell onPress={showModal}>Bench Press</DataTable.Cell>
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
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <View>
              <View style={styles.menu} >
                <Menu
                  style={{ marginTop: 2 }}
                  visible={menuVisible}
                  onDismiss={closeMenu}
                  anchor={<Button mode='outlined' onPress={openMenu}>Which lift?</Button>}>
                  <Menu.Item onPress={() => {benchMenuControl()}} title="Bench Press" />
                  <Menu.Item onPress={() => {squatMenuControl()}} title="Squat" />
                  <Menu.Item onPress={() => {barRowMenuControl()}} title="Barbell Row" />
                  <Menu.Item onPress={() => {barPressMenuControl()}} title="Barbell Press" />
                  <Menu.Item onPress={() => {deadMenuControl()}} title="Deadlift" />
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
    alignSelf: 'center'
  }
})

export default withTheme(LiftTable)