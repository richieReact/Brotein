import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [arms, setArms] = useState('200')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY0 = '@save_arms'

  const saveArmsData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY0, arms)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readArmsData = async () => {
    try {
      const userArms = await AsyncStorage.getItem(STORAGE_KEY0)
  
      if (userArms !== null) {
        setArms(userArms)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitArms = () => {
    if (!arms) return
  
    saveArmsData(arms)
    setArms(arms)
  }

  const onChangeArmsText = userArms => setArms(userArms)

  return [arms, setArms, saveArmsData, readArmsData, onSubmitArms, onChangeArmsText]
}