import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [deadWeight, setDeadWeight] = useState('0')

  const STORAGE_KEY = '@save_deadlift'

  const saveDeadliftData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, deadWeight)
    } catch (e) {
      alert('nope')
    } 
  }

  const readDeadliftData = async () => {
    try {
      const userDeadweight = await AsyncStorage.getItem(STORAGE_KEY)

      if (userDeadweight !== null) {
        setDeadWeight(userDeadweight)
      }
    } catch (e) {
      alert('oopsies')
    }
  }

  const onSubmitDeadlift = () => {
    if (!deadWeight) return

    saveDeadliftData(deadWeight)
    setDeadWeight(deadWeight)
  }

  const onChangeDeadliftText = userDtext => setDeadWeight(userDtext)

  return [deadWeight, setDeadWeight, readDeadliftData, onSubmitDeadlift, onChangeDeadliftText]
}