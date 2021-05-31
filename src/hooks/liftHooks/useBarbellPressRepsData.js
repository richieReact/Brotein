import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [barPressReps, setBarPressReps] = useState('0')

  const STORAGE_KEY = '@save_barPressReps'

  const saveBarPressRepsData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, barPressReps)
    } catch (e) {
      alert('nooo')
    }
  }

  const readBarPressRepsData = async () => {
    try {
      const userBPReps = await AsyncStorage.getItem(STORAGE_KEY)

      if (userBPReps !== null) {
        setBarPressReps(userBPReps)
      }
    } catch (e) {
      alert('nopers')
    }
  }

  const onSubmitBarPressReps = () => {
    if (!barPressReps) return

    saveBarPressRepsData(barPressReps)
    setBarPressReps(barPressReps)
  }

  const onChangeBarPressRepsText = userBPr => setBarPressReps(userBPr)

  return [barPressReps, setBarPressReps, readBarPressRepsData, onSubmitBarPressReps, onChangeBarPressRepsText]
}