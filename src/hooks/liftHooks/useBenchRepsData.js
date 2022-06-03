import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [benchReps, setBenchReps] = useState('0')

  const STORAGE_KEY1 = '@save_benchReps'

  const saveBenchRepsData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY1, benchReps)
    } catch (e) {
      alert('oh shit')
    }
  }

  const readBenchRepsData = async () => {
    try {
      const userBenchReps = await AsyncStorage.getItem(STORAGE_KEY1)

      if (userBenchReps !== null) {
        setBenchReps(userBenchReps)
      }
    } catch (e) {
      alert('noooo')
    }
  }

  const onSubmitBenchReps = () => {
    if (!benchReps) return

    saveBenchRepsData(benchReps)
    setBenchReps(benchReps)
  }

  const onChangeBenchRepsText = (userBReps) => setBenchReps(userBReps)

  return [benchReps, setBenchReps, readBenchRepsData, onSubmitBenchReps, onChangeBenchRepsText]
}
