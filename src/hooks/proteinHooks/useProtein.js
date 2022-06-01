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

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY54, '1')
  }, [])

  const addProtein = () => {
    const nmbProtein = Number(protein) + Number(newProtein)
    const strProtein = nmbProtein.toString()
    const entryDate = new Date()
    const savedDate = entryDate.getDay()
    console.log(savedDate + ' is the added protein day')
    const strDate = savedDate.toString()
    console.log(strDate + ' is the date of the saved protein')
    setDate(strDate)
    AsyncStorage.setItem(STORAGE_KEY54, strDate)

    setProtein(strProtein)
    // saveProteinData(strProtein)
    AsyncStorage.setItem(STORAGE_KEY00, strProtein)
    alert('Protein shoulda just been saved hmmm')
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
      const newDay = newDate.getDay()
      const numDay = newDay.toString()
      setDay(numDay)
      // AsyncStorage.setItem(STORAGE_KEY55, numDay)
      const lastEntry = await AsyncStorage.getItem(STORAGE_KEY54)

      if (numDay !== lastEntry) {
        console.log(date + ' is the date')
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
