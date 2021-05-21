import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Card, Title, Paragraph, withTheme, Button, TextInput } from 'react-native-paper';
import { colors, Input } from 'react-native-elements'

import Spacer from './Spacer'

const ProteinCard = ({ theme }) => {
  const [protein, setProtein] = useState(0)
  const [newProtein, setNewProtein] = useState(0)
  const [delProtein, setDelProtein] = useState(0)

  const { colors } = theme

  return (
    <>
      <View style={{ color: colors.primary }} >

      <View>
        <Card>
          <Card.Title title="Today's Protein" />
          <Card.Content>
            <Title>{protein} grams</Title>
            <Paragraph>
              We recommend at least 1 gram of protein per pound of lean bodyweight!
            </Paragraph>
          </Card.Content>
          {/* <Card.Cover source={{ uri: 'https://picsum.photos/300' }} /> */}
          {/* <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions> */}
        </Card>
      </View>

      <Spacer />

      <View style={{ color: colors.primary }} >
        <Button onPress={() => setProtein('0')} mode='outlined'>Reset Protein Count</Button>
      </View>

      <Spacer />

      <View style={styles.input} >
        <TextInput 
          style={{ flex: 1 }}
          label='Add protein'
          value={newProtein}
          onChangeText={(num) => setNewProtein(num)}
        />
        <Button 
          contentStyle={{ height: 60, width: 60 }}
          compact
          icon='plus'
          onPress={() => setProtein(Number(protein) + Number(newProtein))} 
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
          onPress={() => setProtein(Number(protein) - Number(delProtein))} 
          mode='outlined' 
          style={{ height: 60, justifyContent: 'center', alignContent: 'center' }}
        ></Button>
      </View> 

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