import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-paper'

const Measure = () => {
  const [weight, setWeight] = useState('200')

  return (
    <>
      <Text style={styles.title} >Measurements</Text>
      <View style={styles.row} >
        <Text style={styles.label} >Weight!</Text>
        <TextInput 
          value={weight}
          onChangeText={(num) => setWeight(num)}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    width: '20%',
    height: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 21,
    marginLeft: 135,
    marginBottom: 15
  },
  label: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 10,
    textAlignVertical: 'bottom'
  }
})

export default Measure