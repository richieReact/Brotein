import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [water, setWater] = useState('0')
  const [moWater, setMoWater] = useState('')
  const [lessWater, setLessWater] = useState('')
  const [date, setDate] = useState('')
  const [day, setDay] = useState('')

  const STORAGE_KEY09 = '@save_water'
  const STORAGE_KEY91 = '@save_water_date'

  // useEffect(() => {
  //   AsyncStorage.setItem(STORAGE_KEY09, '0')
  // }, [])

  const addWater = () => {
    const nmbWater = Number(water) + Number(moWater) * 0.0068
    const strWater = nmbWater.toString()
    // const entryDate = new Date()
    // const savedDate = entryDate.getDay()
    // const strDate = savedDate.toString()

    // setDate(strDate)
    // AsyncStorage.setItem(STORAGE_KEY91, strDate)

    setWater(strWater)
    AsyncStorage.setItem(STORAGE_KEY09, strWater)
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
    // Taking out the auto delete for now, not working on the device.
    // try {
    //   const newDate = new Date()
    //   const newDay = newDate.getDay()
    //   const numDay = newDay.toString()
    //   setDay(numDay)
    //   console.log(numDay + ' is the current day')
    //   // AsyncStorage.setItem(STORAGE_KEY55, numDay)
    //   const lastEntry = await AsyncStorage.getItem(STORAGE_KEY91)
    //   console.log(lastEntry + ' is the lastEntry')

    //   if (numDay !== lastEntry) {
    //     AsyncStorage.removeItem(STORAGE_KEY09)
    //     setWater('0')
    //     console.log('The Water was reset')
    //   } else {
    //     const userWater = await AsyncStorage.getItem(STORAGE_KEY09)
    //     setWater(userWater)
    //   }
    // } catch (e) {
    //   alert('nah son')
    // }

    const userWater = await AsyncStorage.getItem(STORAGE_KEY09)
    setWater(userWater)

    // try {
    //   const userWater = await AsyncStorage.getItem(STORAGE_KEY09)

    //   if (userWater !== null) {
    //     setWater(userWater)
    //   }
    // } catch (e) {
    //   alert('oh noooo')
    // }
  }

  return [water, setWater, moWater, setMoWater, lessWater, setLessWater, saveWaterData, readWaterData, addWater, persistWater, clearStorage]
}
