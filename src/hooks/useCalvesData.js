import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [calves, setCalves] = useState('0')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY2 = '@save_calves'

  const saveCalvesData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY2, calves)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readCalvesData = async () => {
    try {
      const userCalves = await AsyncStorage.getItem(STORAGE_KEY2)

      if (userCalves !== null) {
        setCalves(userCalves)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitCalves = () => {
    if (!calves) return

    saveCalvesData(calves)
    setCalves(calves)
  }

  const onChangeCalvesText = (userCalves) => setCalves(userCalves)

  return [calves, setCalves, saveCalvesData, readCalvesData, onSubmitCalves, onChangeCalvesText]
}
