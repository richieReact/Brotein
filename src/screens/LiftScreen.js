import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withTheme } from 'react-native-paper'

import LiftTable from '../components/LiftTable'

const LiftScreen = () => {
  

  return (
    <>
      <LiftTable />
    </>
  )
}

const styles = StyleSheet.create({

})

export default withTheme(LiftScreen)