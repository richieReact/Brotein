import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [squatWeight, setSquatWeight] = useState('0')


  const STORAGE_KEY1 = '@save_squatWeight'

  const saveSquatWeightData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY1, squatWeight)
    } catch (e) {
      alert('oops')
    }
  }

  const readSquatWeightData = async () => {
    try {
      const userSquatWeight = await AsyncStorage.getItem(STORAGE_KEY1)

      if (userSquatWeight !== null) {
        setSquatWeight(userSquatWeight)
      }
    } catch (e) {
      alert('oh shit')
    }
  }

  const onSubmitSquatWeightText = () => {
    if (!squatWeight) return

    saveSquatWeightData(squatWeight)
    setSquatWeight(squatWeight)
  }

  const onChangeSquatWeightText = userSWeight => setSquatWeight(userSWeight)

  return [squatWeight, setSquatWeight, readSquatWeightData, onSubmitSquatWeightText, onChangeSquatWeightText]
}