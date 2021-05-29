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

  const subtractWater = () => {
    const wtr = lessWater * .0078
    const newWater = water - wtr
    const strWater = newWater.toString()

    water = strWater
    saveWaterData(water)
    setWater(water)
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

  const resetWater = () => {
    setWater('0')
    saveWaterData()
  }

  const saveWaterData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY09, water)
      alert('Saved!')
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

  const onSubmitWater = () => {
    if (!water) return

    saveWaterData(water)
    setWater(water)
  }

  const onChangeWaterText = userWater => setWater(userWater)

  return [water, setWater, moWater, setMoWater, lessWater, setLessWater, saveWaterData, readWaterData, onSubmitWater, onChangeWaterText, addWater, subtractWater, resetWater, persistWater, clearStorage]
}