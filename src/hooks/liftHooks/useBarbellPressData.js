import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [barPressWeight, setBarPressWeight] = useState('0')

  const STORAGE_KEY = '@save_barPressWeight'

  const saveBarPressData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, barPressWeight)
    } catch (e) {
      alert('noooo')
    }
  }

  const readBarPressData = async () => {
    try {
      const userBarPress = await AsyncStorage.getItem(STORAGE_KEY)

      if (userBarPress !== null) {
        setBarPressWeight(userBarPress)
      }
    } catch (e) {alert('fucked up')}
  }

  const onSubmitBarPressWeight = () => {
    if (!barPressWeight) return

    saveBarPressData(barPressWeight)
    setBarPressWeight(barPressWeight)
  }

  const onChangeBarPressWeightText = userBPWeight => setBarPressWeight(userBPWeight)

  return [barPressWeight, setBarPressWeight, readBarPressData, onSubmitBarPressWeight, onChangeBarPressWeightText]
}