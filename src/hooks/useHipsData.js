import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [hips, setHips] = useState('0')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY5 = '@save_hips'

  const saveHipsData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY5, hips)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readHipsData = async () => {
    try {
      const userHips = await AsyncStorage.getItem(STORAGE_KEY5)

      if (userHips !== null) {
        setHips(userHips)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitHips = () => {
    if (!hips) return

    saveHipsData(hips)
    setHips(hips)
  }

  const onChangeHipsText = (userHips) => setHips(userHips)

  return [hips, setHips, saveHipsData, readHipsData, onSubmitHips, onChangeHipsText]
}
