import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { Button, Input } from 'react-native-elements'

const FitScreen = () => {
  const [protein, setProtein] = useState(0)
  const [newProtein, setNewProtein] = useState(0)

  return (
    <>
    <View>
      <Card>
        <Card.Title title="Today's Protein"  />
        <Card.Content>
          <Title>{protein} grams</Title>
          {/* <Paragraph>Card content</Paragraph> */}
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
        {/* <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions> */}
    </Card>
    </View>
    <Button 
      title='Reset Protein count'
      raised
      onPress={() => setProtein('0')}
    />
    <View style={styles.input} >
      <Input 
        label='Add tein'
        value={newProtein}
        onChangeText={(num) => setNewProtein(num)}
      />
      <Button
        title='Add more tein'
        onPress={() => setProtein(Number(protein) + Number(newProtein))}
      />
    </View>
    
  </>

  )
}

const styles = StyleSheet.create({
  input: {
    width: 100,
    flexDirection: 'row'
  }
})

export default FitScreen