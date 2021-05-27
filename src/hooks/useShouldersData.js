import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [shoulders, setShoulders] = useState('200')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY6 = '@save_shoulders'

  const saveShouldersData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY6, shoulders)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readShouldersData = async () => {
    try {
      const userShoulders = await AsyncStorage.getItem(STORAGE_KEY6)
  
      if (userShoulders !== null) {
        setShoulders(userShoulders)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitShoulders = () => {
    if (!shoulders) return
  
    saveShouldersData(shoulders)
    setShoulders(shoulders)
  }

  const onChangeShouldersText = userShoulders => setShoulders(userShoulders)

  return [shoulders, setShoulders, saveShouldersData, readShouldersData, onSubmitShoulders, onChangeShouldersText]
}