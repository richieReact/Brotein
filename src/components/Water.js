import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { ProgressBar, Colors, Button, withTheme } from 'react-native-paper'

import Spacer from './Spacer'
import useWaterData from '../hooks/waterHooks/useWater'

const Water = ({ theme }) => {
  const [
    water,
    setWater,
    moWater,
    setMoWater,
    lessWater,
    setLessWater,
    saveWaterData,
    readWaterData,
    addWater,
    persistWater,
    clearStorage,
  ] = useWaterData()

  useEffect(() => {
    readWaterData()
  }, [])

  return (
    <>
      <Text style={styles.title}>Water Intake | Get that gallon (128 oz)</Text>
      <Spacer />
      <ProgressBar progress={water} color={Colors.blue500} />
      <Spacer />

      <View style={styles.input}>
        <TextInput
          style={{ borderRadius: 80, width: 60, borderColor: 'white', backgroundColor: '#b3b3b3', textAlign: 'center', marginRight: 10 }}
          label='Add water'
          value={moWater}
          onChangeText={setMoWater}
        />
        <Button
          contentStyle={{ height: 60, width: 60 }}
          compact
          icon='plus'
          onPress={addWater}
          mode='outlined'
          style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
        ></Button>

        {/* <Button 
          contentStyle={{ height: 60, width: 80 }}
          compact
          onPress={persistWater}
          mode='outlined' 
          style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
        >Save</Button> */}
        <Button
          contentStyle={{ height: 60, width: 80 }}
          compact
          onPress={clearStorage}
          mode='outlined'
          style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
        >
          Clear
        </Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    height: 61,
    marginTop: 7,
    justifyContent: 'center',
  },
})

export default withTheme(Water)
