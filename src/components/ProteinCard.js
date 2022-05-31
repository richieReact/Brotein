import React, { useEffect } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Card, Title, Paragraph, withTheme, Button } from 'react-native-paper'
import { colors } from 'react-native-elements'

import Spacer from './Spacer'
import useProteinData from '../hooks/proteinHooks/useProtein'

const ProteinCard = ({ theme }) => {
  const [
    protein,
    setProtein,
    saveProteinData,
    readProteinData,
    newProtein,
    setNewProtein,
    delProtein,
    setDelProtein,
    addProtein,
    persistProtein,
    clearProteinStorage,
  ] = useProteinData()

  // useEffect(() => {
  //   readProteinData()
  // }, [])

  const { colors } = theme

  return (
    <>
      <View style={{ color: colors.primary }}>
        <View>
          <Card>
            <Card.Title title="Today's Protein" titleStyle={{ fontWeight: 'bold', fontSize: 21, marginLeft: 99 }} />
            <Card.Content>
              <Title style={{ textAlign: 'center', marginTop: -5 }}>{protein} grams</Title>

              <Paragraph style={{ textAlign: 'center', fontSize: 14 }}>
                We recommend at least 1 gram of protein per pound of lean bodyweight!
              </Paragraph>
            </Card.Content>
          </Card>
        </View>

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
            style={{
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: 80,
              marginRight: 15,
            }}
          />

          <Button
            contentStyle={{ height: 60, width: 70, marginLeft: -5 }}
            compact
            // icon='minus'
            onPress={clearProteinStorage}
            mode='outlined'
            style={{
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: 80,
            }}
          >
            Clear
          </Button>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    flexDirection: 'row',
    height: 61,
    justifyContent: 'center',
  },
  button: {
    color: colors.primary,
  },
})

export default withTheme(ProteinCard)
