import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput , Button} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Measure = () => {
  const [weight, setWeight] = useState('200')

  // Attemp at AsyncStorage for the weight; it works!
  const STORAGE_KEY = '@save_weight'

  useEffect(() => {
    readData()
  }, [])

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, weight)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const readData = async () => {
    try {
      const userWeight = await AsyncStorage.getItem(STORAGE_KEY)
  
      if (userWeight !== null) {
        setWeight(userWeight)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  const onSubmitWeight = () => {
    if (!weight) return
  
    saveData(weight)
    setWeight(weight)
  }

  // just to hold the app
  const onSubmitEditing = () => {
    console.log("This doesn't do shit")
  }

  const onChangeText = userWeight => setWeight(userWeight)

  return (
    <>
      <Text style={styles.title}>Measurements</Text>

      <View style={{ flexDirection: 'row' }} >
        <View style={styles.row} >
          <Text style={styles.label} >Weight</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitWeight}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>

        <View style={styles.row}  >
          <Text style={styles.label}>Arms</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>

        <View style={styles.row}  >
          <Text style={styles.label}>Waist</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>

        <View style={styles.row}  >
          <Text style={styles.label}>Chest</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>

        <View style={styles.row}  >
          <Text style={styles.label}>Thighs</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 85 }} >
        <View style={styles.row} >
          <Text style={styles.label} >BodyFat%</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitWeight}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>

        <View style={styles.row} >
          <Text style={styles.label} >Forearms</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitWeight}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>

        <View style={styles.row} >
          <Text style={styles.label} >Hips</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitWeight}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>

        <View style={styles.row} >
          <Text style={styles.label} >Shoulders</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitWeight}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>

        <View style={styles.row} >
          <Text style={styles.label}>Calves</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitWeight}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitEditing}
          >Save
          </Button>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    width: '20%',
    height: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 21,
    marginLeft: 135,
    marginBottom: 15
  },
  label: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 10,
    textAlignVertical: 'bottom'
  }
})

export default Measure