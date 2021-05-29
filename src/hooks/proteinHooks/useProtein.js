import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [protein, setProtein] = useState('')
  const [newProtein, setNewProtein] = useState('')
  const [delProtein, setDelProtein] = useState('')

  const STORAGE_KEY00 = '@save_protein'

  const addProtein = () => {
    const nmbProtein = (Number(protein) + Number(newProtein))
    console.log(nmbProtein)
    const strProtein = nmbProtein.toString()

    saveProteinData(strProtein)
    setProtein(strProtein)
  }

  const deleteProtein = () => {
    const negProtein = (Number(protein) - Number(delProtein))
    const byeProtein = negProtein.toString()
    setProtein(byeProtein)
    saveProteinData()
  }

  const resetProtein = () => {
    setProtein('0')
    saveProteinData()
  }

  const saveProteinData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY00, protein)
      // alert('Data saved!')
    } catch (e) {
      alert('Data save failed!')
    }
  }

  const readProteinData = async () => {
    try {
      const userProtein = await AsyncStorage.getItem(STORAGE_KEY00)
      // console.log(userProtein)
      // const blurg = Number(userProtein)
      if (userProtein !== null) {
        setProtein(userProtein)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitProtein = () => {
    if (!protein) return

    saveProteinData(protein)
    setProtein(protein)
  }

    const onChangeProteinText = userProtein => setProtein(userProtein)

    return [protein, setProtein, saveProteinData, readProteinData, onSubmitProtein, onChangeProteinText, newProtein, setNewProtein, delProtein, setDelProtein, addProtein, deleteProtein, resetProtein]
}