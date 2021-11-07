import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [protein, setProtein] = useState('0')
  const [newProtein, setNewProtein] = useState('')
  const [delProtein, setDelProtein] = useState('')
  const [date, setDate] = useState('')
  const [day, setDay] = useState('')

  const STORAGE_KEY00 = '@save_protein'
  const STORAGE_KEY54 = '@save_protein_date'

  const addProtein = () => {
    const nmbProtein = Number(protein) + Number(newProtein)
    const strProtein = nmbProtein.toString()
    const entryDate = new Date()
    const savedDate = entryDate.getDay()
    const strDate = savedDate.toString()
    console.log(savedDate + ' is the date of the saved protein')
    setDate(strDate)
    AsyncStorage.setItem(STORAGE_KEY54, strDate)

    setProtein(strProtein)
    // saveProteinData(strProtein)
    AsyncStorage.setItem(STORAGE_KEY00, strProtein)
  }

  const persistProtein = () => {
    saveProteinData(protein)
    setProtein(protein)
    // alert('Protein saved!')

    setTimeout(() => {
      alert('Saved!')
    }, 1000)
  }

  const clearProteinStorage = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY00)

      setProtein('0')
    } catch (e) {
      alert('oh nooo')
    }
  }

  const saveProteinData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY00, protein)
    } catch (e) {
      alert('Data save failed!')
    }
  }

  const readProteinData = async () => {
    try {
      const newDate = new Date()
      console.log(newDate + ' is the date')
      const newDay = newDate.getDay()
      console.log(newDay + ' is the day')
      const numDay = newDay.toString()
      setDay(numDay)
      console.log(newDay + ' is the current day')
      // AsyncStorage.setItem(STORAGE_KEY55, numDay)
      console.log('stage 1 complete')

      if (date != newDay) {
        AsyncStorage.removeItem(STORAGE_KEY00)
        setProtein('0')
        console.log('The Protein was reset')
      } else {
        const userProtein = await AsyncStorage.getItem(STORAGE_KEY00)
        setProtein(userProtein)
      }
    } catch (e) {
      alert('nah son')
    }

    // const newDate = new Date()
    // const newDay = newDate.getDay()
    // setDay(newDay)
    // AsyncStorage.setItem(STORAGE_KEY55, newDay)

    // if (date != newDay) {
    //   AsyncStorage.removeItem(STORAGE_KEY00)
    //   setProtein('0')
    // } else {
    //   const userProtein = await AsyncStorage.getItem(STORAGE_KEY00)
    //   setProtein(userProtein)

    // //   // try {
    // //   //   const userProtein = await AsyncStorage.getItem(STORAGE_KEY00)
    // //   //   if (userProtein !== null) {
    // //   //     setProtein(userProtein)
    // //   //   }
    // //   // } catch (e) {
    // //   //   alert('Failed to fetch the data from storage')
    // //   // }
  }

  return [
    protein,
    setProtein,
    saveProteinData,
    readProteinData,
    newProtein,
    setNewProtein,
    delProtein,
    setDelProtein,
    addProtein,
    persistProtein,
    clearProteinStorage,
  ]
}
