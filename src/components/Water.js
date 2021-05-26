import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ProgressBar, Colors, TextInput, Button, withTheme } from 'react-native-paper'

import Spacer from './Spacer'
import BigSpacer from './BigSpacer'

const Water = ({ theme }) => {
  const [water, setWater] = useState('')
  const [moWater, setMoWater] = useState('')
  const [lessWater, setLessWater] = useState('')

  const colors = { theme }

  const subtractWater = () => {
    const wtr = lessWater * .0078
    return water - wtr
  }

  return (
    <>
      <Text style={styles.title}>Water Intake | Get that gallon (128 oz)</Text>
      <Spacer />
      <ProgressBar progress={water} color={Colors.blue500} />
      <Spacer />
      <View style={{ color: colors.primary }} >
        <Button onPress={() => setwater('0')} mode='outlined'>Reset Water</Button>
      </View>

      <Spacer />
      <View style={styles.input} >
        <TextInput 
          style={{ flex: 1 }}
          label='Add water'
          value={moWater}
          onChangeText={(num) => setMoWater(num)}
        />
        <Button 
          contentStyle={{ height: 60, width: 60 }}
          compact
          icon='plus'
          onPress={() => setWater(Number(moWater) * .0078 )} 
          mode='outlined' 
          style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
        ></Button>
        
        <TextInput 
          style={{ flex: 1 }}
          label='Subtract water'
          value={lessWater}
          onChangeText={(num) => setLessWater(num)}
        />
        <Button 
          contentStyle={{ height: 60, width: 60 }}
          compact
          icon='minus'
          onPress={() => setWater(subtractWater)} 
          mode='outlined' 
          style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
        ></Button>
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
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    height: 61,
  }
})

export default withTheme(Water)