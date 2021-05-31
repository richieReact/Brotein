import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [barRowReps, setBarRowReps] = useState('0')

  const STORAGE_KEY = '@save_barRowReps'

  const saveBarRowRepsData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, barRowReps)
    } catch (e) {
      alert('oh noo')
    }
  }

  const readBarRowRepsData = async () => {
    try {
      const userBarRowReps = await AsyncStorage.getItem(STORAGE_KEY)

      if (userBarRowReps !== null) {
        setBarRowReps(userBarRowReps)
      }
    } catch (e) {
      alert('fucked up')
    }
  }

  const onSubmitBarRowReps = () => {
    if (!barRowReps) return

    saveBarRowRepsData(barRowReps)
    setBarRowReps(barRowReps)
  }

  const onChangeBarRowReps = userBRReps => setBarRowReps(userBRReps)

  return [barRowReps, setBarRowReps, readBarRowRepsData, onSubmitBarRowReps, onChangeBarRowReps]
}