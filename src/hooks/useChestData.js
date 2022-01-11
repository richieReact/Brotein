import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const [chest, setChest] = useState('0')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY3 = '@save_chest'

  const saveChestData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY3, chest)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readChestData = async () => {
    try {
      const userChest = await AsyncStorage.getItem(STORAGE_KEY3)

      if (userChest !== null) {
        setChest(userChest)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitChest = () => {
    if (!chest) return

    saveChestData(chest)
    setChest(chest)
  }

  const onChangeChestText = (userChest) => setChest(userChest)

  return [chest, setChest, saveChestData, readChestData, onSubmitChest, onChangeChestText]
}
