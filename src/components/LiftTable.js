import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DataTable, withTheme, Title, Modal, Portal, Provider, Button, TextInput, Menu, Divider } from 'react-native-paper'

const LiftTable = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('')

  // State for each lift and rep
  const [benchWeight, setBenchWeight] = useState('185')
  const [squatWeight, setSquatWeight] = useState('205')
  const [barRowWeight, setBarRowWeight] = useState('155')
  const [barPressWeight, setBarPressWeight] = useState('135')
  const [deadWeight, setDeadWeight] = useState('225')
  const [benchReps, setBenchReps] = useState('9')
  const [squatReps, setSquatReps] = useState('10')
  const [barRowReps, setBarRowReps] = useState('12')
  const [barPressReps, setBarPressReps] = useState('8')
  const [deadReps, setDeadReps] = useState('8')

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const containerStyle = {backgroundColor: 'white', margin: 40, flex: 1}

  const [menuVisible, setMenuVisible] = useState(false)

  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  //This works!!! Now I gotta add the reps and make one for each exercise
  const [benchControl, setBenchControl] = useState(false)
  const bWeightCnt = () => {
    if (benchControl) {
      return (
        <View>
          <TextInput 
            label='Bench Press Weight'
            value={benchWeight}
            onChangeText={(num) => setBenchWeight(num)}
          />
          <TextInput 
            label='Bench Press Reps'
            value={benchReps}
            onChangeText={(num) => setBenchReps(num)}
          />
          <Button
            style={{ width: 150, alignSelf: 'center' }}
            mode='outlined'
            onPress={() => setBenchControl(false)}  
          >Finish Update</Button>
        </View>
      )
    }
  }

  const [squatControl, setSquatControl] = useState(false)
  const sWeightCnt = () => {
    if (squatControl) {
      return <TextInput 
      style={{ flex: 1 }}
      label='Squat Weight'
      value={squatWeight}
      onChangeText={(num) => setSquatWeight(num)}
    />
    }
  }

  // Makes the menu close after selecting the lift
  const menuControl = () => {
    setBenchControl(true)
    closeMenu()
  }


  return (
    <>
      <Provider>
        <Portal>
          <Title style={{ textAlign: 'center' }} >Title</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Exercises</DataTable.Title>
              <DataTable.Title numeric>Weight</DataTable.Title>
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

          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <View>
              <View style={styles.menu} >
                <Menu
                  style={{ marginTop: 2 }}
                  visible={menuVisible}
                  onDismiss={closeMenu}
                  anchor={<Button onPress={openMenu}>Which lift?</Button>}>
                  <Menu.Item onPress={() => {menuControl()}} title="Bench Press" />
                  <Menu.Item onPress={() => {setSquatControl(true)}} title="Squat" />
                  <Menu.Item onPress={() => {}} title="Barbell Row" />
                  <Menu.Item onPress={() => {}} title="Barbell Press" />
                  <Menu.Item onPress={() => {}} title="Deadlift" />
                </Menu>
              </View>
              {bWeightCnt()}
              {sWeightCnt()}
              {/* <TextInput 
                style={{ flex: 1 }}
                label='Bench Press Weight'
                value={benchWeight}
                onChangeText={(num) => setBenchWeight(num)}
              /> */}
              {/* <Button 
                contentStyle={{ height: 60, width: 60 }}
                compact
                icon='minus'
                onPress={() => setProtein(Number(protein) - Number(delProtein))} 
                mode='outlined' 
                style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
              ></Button> */}
            </View>
          </Modal>
          
          
        </Portal>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  modal: {
  
  },
  menu: {
    position: 'absolute',
    bottom: 260,
    right: 120
  }
})

export default withTheme(LiftTable)