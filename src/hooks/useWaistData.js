import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [waist, setWaist] = useState('200')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY8 = '@save_waist'

  const saveWaistData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY8, waist)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readWaistData = async () => {
    try {
      const userWaist = await AsyncStorage.getItem(STORAGE_KEY8)
  
      if (userWaist !== null) {
        setWaist(userWaist)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitWaist = () => {
    if (!waist) return
  
    saveWaistData(waist)
    setWaist(waist)
  }

  const onChangeWaistText = userWaist => setWaist(userWaist)

  return [waist, setWaist, saveWaistData, readWaistData, onSubmitWaist, onChangeWaistText]
}