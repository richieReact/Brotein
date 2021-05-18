import React from 'react'
import { View, StyleSheet } from 'react-native'

const BigSpacer = ({ children }) => {
  return (
    <View style={styles.spacer}>{children}</View>
  )
}

const styles = StyleSheet.create({
  spacer: {
    margin: 20
  }
})

export default BigSpacer