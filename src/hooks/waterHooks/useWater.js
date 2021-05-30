import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [water, setWater] = useState('')
  const [moWater, setMoWater] = useState('')
  const [lessWater, setLessWater] = useState('')

  const STORAGE_KEY09 = '@save_water'

  const addWater = () => {
    const nmbWater = (Number(water) + Number(moWater) * .0078)
    const strWater = nmbWater.toString()
        
    saveWaterData(strWater)
    setWater(strWater)
  }

  const clearStorage = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY09)

      setWater('')
    } catch (e) {
      alert('oops')
    }
  }

  const persistWater = () => {

    saveWaterData(water)
    setWater(water)
  }

  const saveWaterData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY09, water)
    } catch (e) {
      alert('Fucked up')
    }
  }

  const readWaterData = async () => {
    try {
      const userWater = await AsyncStorage.getItem(STORAGE_KEY09)

      if (userWater !== null) {
        setWater(userWater)
      }
    } catch (e) {
      alert('oh noooo')
    }
  }

  return [water, setWater, moWater, setMoWater, lessWater, setLessWater, saveWaterData, readWaterData, addWater, persistWater, clearStorage]
}