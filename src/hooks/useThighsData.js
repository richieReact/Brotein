import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [thighs, setThighs] = useState('200')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY7 = '@save_thighs'

  const saveThighsData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY7, thighs)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readThighsData = async () => {
    try {
      const userThighs = await AsyncStorage.getItem(STORAGE_KEY7)
  
      if (userThighs !== null) {
        setThighs(userThighs)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitThighs = () => {
    if (!thighs) return
  
    saveThighsData(thighs)
    setThighs(thighs)
  }

  const onChangeThighsText = userThighs => setThighs(userThighs)

  return [thighs, setThighs, saveThighsData, readThighsData, onSubmitThighs, onChangeThighsText]
}