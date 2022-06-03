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
      <Text style={styles.title}>Water Intake | 128oz</Text>
      <Spacer />
      <ProgressBar progress={water} color={Colors.blue500} style={{ width: '85%', alignSelf: 'center', border: '1px grey' }} />
      <Spacer />

      <View style={styles.input}>
        <TextInput
          keyboardType='number-pad'
          keyboardAppearance='dark'
          style={{
            borderRadius: 80,
            width: 60,
            borderColor: 'white',
            backgroundColor: '#b3b3b3',
            textAlign: 'center',
            marginRight: 15,
            fontSize: 21,
          }}
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
          style={{ height: 60, justifyContent: 'center', alignContent: 'center', borderRadius: 80, marginRight: 15 }}
        ></Button>

        {/* <Button 
          contentStyle={{ height: 60, width: 80 }}
          compact
          onPress={persistWater}
          mode='outlined' 
          style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
        >Save</Button> */}
        <Button
          contentStyle={{ height: 60, width: 70, marginLeft: -5 }}
          compact
          onPress={clearStorage}
          mode='outlined'
          style={{ height: 60, width: 60, justifyContent: 'center', alignContent: 'center', borderRadius: 80 }}
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
