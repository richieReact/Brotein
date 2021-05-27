import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [forearms, setForearms] = useState('200')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY4 = '@save_forearms'

  const saveForearmsData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY4, forearms)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readForearmsData = async () => {
    try {
      const userForearms = await AsyncStorage.getItem(STORAGE_KEY4)
  
      if (userForearms !== null) {
        setForearms(userForearms)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitForearms = () => {
    if (!forearms) return
  
    saveForearmsData(forearms)
    setForearms(forearms)
  }

  const onChangeForearmsText = userForearms => setForearms(userForearms)

  return [forearms, setForearms, saveForearmsData, readForearmsData, onSubmitForearms, onChangeForearmsText]
}