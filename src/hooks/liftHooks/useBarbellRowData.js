import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [barRowWeight, setBarRowWeight] = useState('0')

  const STORAGE_KEY = '@save_barRowWeight'

  const saveBarRowData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, barRowWeight)
    } catch (e) {
      alert('woah oh no')
    }
  }

  const readBarRowWeightData = async () => {
    try {
      const userBarRowWeight = await AsyncStorage.getItem(STORAGE_KEY)

      if (userBarRowWeight !== null) {
        setBarRowWeight(userBarRowWeight)
      }
    } catch (e) {alert('oh shit')}
  }

  const onSubmitBarRowWeight = () => {
    if (!barRowWeight) return

    saveBarRowData(barRowWeight)
    setBarRowWeight(barRowWeight)
  }

  const onChangeBarRowWeightText = userBRWeight => setBarRowWeight(userBRWeight)

  return [barRowWeight, setBarRowWeight, readBarRowWeightData, onSubmitBarRowWeight, onChangeBarRowWeightText]
}