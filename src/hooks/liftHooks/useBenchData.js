import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [benchWeight, setBenchWeight] = useState('0')

  const STORAGE_KEY1 = '@save_bench'

  const saveBenchData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY1, benchWeight)
    } catch (e) {
      alert('oopsies')
    }
  }

  const readBenchWeightData = async () => {
    try {
      const userBenchWeight = await AsyncStorage.getItem(STORAGE_KEY1)

      if (userBenchWeight !== null) {
        setBenchWeight(userBenchWeight)
      }
    } catch (e) {
      alert('oh nooo')
    }
  }

  const onSubmitBenchWeight = () => {
    if (!benchWeight) return

    saveBenchData(benchWeight)
    setBenchWeight(benchWeight)
  }

  const onChangeBenchWeightText = userBWeight => setBenchWeight(userBWeight)

  return [benchWeight, setBenchWeight, readBenchWeightData, onSubmitBenchWeight, onChangeBenchWeightText]
}