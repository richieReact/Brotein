import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [bodyFat, setBodyFat] = useState('200')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY1 = '@save_bodyFat'

  const saveBodyFatData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY1, bodyFat)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readBodyFatData = async () => {
    try {
      const userBodyFat = await AsyncStorage.getItem(STORAGE_KEY1)
  
      if (userBodyFat !== null) {
        setBodyFat(userBodyFat)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitBodyFat = () => {
    if (!bodyFat) return
  
    saveBodyFatData(bodyFat)
    setBodyFat(bodyFat)
  }

  const onChangeBodyFatText = userBodyFat => setBodyFat(userBodyFat)

  return [bodyFat, setBodyFat, saveBodyFatData, readBodyFatData, onSubmitBodyFat, onChangeBodyFatText]
}