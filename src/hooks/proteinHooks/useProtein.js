import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [protein, setProtein] = useState('0')
  const [newProtein, setNewProtein] = useState('')
  const [delProtein, setDelProtein] = useState('')

  const STORAGE_KEY00 = '@save_protein'

  const addProtein = () => {
    const nmbProtein = Number(protein) + Number(newProtein)
    console.log(nmbProtein)
    const strProtein = nmbProtein.toString()

    setProtein(strProtein)
    saveProteinData(strProtein)
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
      const userProtein = await AsyncStorage.getItem(STORAGE_KEY00)
      if (userProtein !== null) {
        setProtein(userProtein)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
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
