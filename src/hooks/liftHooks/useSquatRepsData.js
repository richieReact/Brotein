import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [squatReps, setSquatReps] = useState('0')

  const STORAGE_KEY = '@save_squatReps'

  const saveSquatRepsData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, squatReps)
    } catch (e) {
      alert('oopsies')
    }
  }

  const readSquatRepsData = async () => {
    try {
      const userSquatReps = await AsyncStorage.getItem(STORAGE_KEY)

      if (userSquatReps !== null) {
        setSquatReps(userSquatReps)
      }
    } catch (e) {
      alert('oooooo')
    }
  }

  const onSubmitSquatReps = () => {
    if (!squatReps) return

    saveSquatRepsData(squatReps)
    setSquatReps(squatReps)
  }

  const onChangeSquatRepsText = userSReps => setSquatReps(userSReps)

  return [squatReps, setSquatReps, readSquatRepsData, onSubmitSquatReps, onChangeSquatRepsText]
}