import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [weight, setWeight] = useState('0')

  // Attempt at AsyncStorage for the weight; it works!
  const STORAGE_KEY = '@save_weight'

  const saveWeightData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, weight)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readWeightData = async () => {
    try {
      const userWeight = await AsyncStorage.getItem(STORAGE_KEY)
      setWeight(userWeight)
      // I believe this messed it up on the device
      // if (userWeight !== null) {
      //   setWeight(userWeight)
      // }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitWeight = () => {
    // if (!weight) return

    saveWeightData(weight)
    setWeight(weight)
  }

  const onChangeWeightText = (userWeight) => setWeight(userWeight)

  return [weight, setWeight, saveWeightData, readWeightData, onSubmitWeight, onChangeWeightText]
}
