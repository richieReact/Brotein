import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [deadReps, setDeadReps] = useState('0')

  const STORAGE_KEY = '@save_deadReps'

  const saveDeadRepsData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, deadReps)
    } catch (e) {
      alert('noooo')
    }
  }

  const readDeadRepsData = async () => {
    try {
      const userDReps = await AsyncStorage.getItem(STORAGE_KEY)

      if (userDReps !== null) {
        setDeadReps(userDReps)
      }
    } catch (e) {
      alert('yoooo nahh b')
    }
  }

  const onSubmitDeadReps = () => {
    if (!deadReps) return

    saveDeadRepsData(deadReps)
    setDeadReps(deadReps)
  }

  const onChangeDeadRepsText = userDR => setDeadReps(userDR)

  return [deadReps, setDeadReps, readDeadRepsData, onSubmitDeadReps, onChangeDeadRepsText]
}