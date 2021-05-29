import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Card, Title, Paragraph, withTheme, Button, TextInput } from 'react-native-paper';
import { colors, Input } from 'react-native-elements'

import Spacer from './Spacer'
import useProteinData from '../hooks/proteinHooks/useProtein'

const ProteinCard = ({ theme }) => {
  const [protein, setProtein, saveProteinData, readProteinData, onSubmitProtein, onChangeProteinText, newProtein, setNewProtein, delProtein, setDelProtein, addProtein, deleteProtein, resetProtein] = useProteinData()

  useEffect(() => {
    readProteinData()
  }, [])

  const { colors } = theme

  return (
    <>
      <View style={{ color: colors.primary }} >

      <View>
        <Card>
          <Card.Title title="Today's Protein" titleStyle={{ fontWeight: 'bold', fontSize: 21, marginLeft: 120 }} />
          <Card.Content>
            <Title style={{ textAlign: 'center', marginTop: -5 }} >{protein} grams</Title>
            <Paragraph style={{ textAlign: 'center' }} >
              We recommend at least 1 gram of protein per pound of lean bodyweight!
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      
      <Spacer />

      {/* <View style={{ color: colors.primary }} >
        <Button onPress={() => resetProtein()} mode='outlined'>Reset Protein Count, hit twice</Button>
      </View> */}

      <Spacer />

      <View style={styles.input} >
        <TextInput 
          style={{ flex: 1 }}
          label='Add protein'
          value={newProtein}
          onChangeText={setNewProtein}
        />
        <Button 
          contentStyle={{ height: 60, width: 60 }}
          compact
          icon='plus'
          onPress={addProtein} 
          mode='outlined' 
          style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
        ></Button>
        
        <TextInput 
          style={{ flex: 1 }}
          label='Subtract protein'
          value={delProtein}
          onChangeText={(num) => setDelProtein(num)}
        />
        <Button 
          contentStyle={{ height: 60, width: 60 }}
          compact
          icon='minus'
          onPress={() => deleteProtein()} 
          mode='outlined' 
          style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
        ></Button>
      </View> 
      <Paragraph style={{ textAlign: 'center' }} >After adding your protein, add 0 afterwards and hit the button to save the data (bug), the same with water intake.</Paragraph>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    flexDirection: 'row',
    height: 61
  },
  button: {
    color: colors.primary
  }
})

export default withTheme(ProteinCard)