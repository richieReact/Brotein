import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput , Button} from 'react-native-paper'

import useWeightData from '../hooks/useWeightData'
import useArmsData from '../hooks/useArmsData'
import useBodyFat from '../hooks/useBodyFatData'
import useCalvesData from '../hooks/useCalvesData'
import useChestData from '../hooks/useChestData'
import useForearmsData from '../hooks/useForearmsData'
import useHipsData from '../hooks/useHipsData'
import useShouldersData from '../hooks/useShouldersData'
import useThighsData from '../hooks/useThighsData'
import useWaistData from '../hooks/useWaistData'

const Measure = () => {
  const [weight, setWeight, saveWeightData, readWeightData, onSubmitWeight, onChangeWeightText] = useWeightData()

  const [arms, setArms, saveArmsData, readArmsData, onSubmitArms, onChangeArmsText] = useArmsData()

  const [bodyFat, setBodyFat, saveBodyFatData, readBodyFatData, onSubmitBodyFat, onChangeBodyFatText] = useBodyFat()

  const [calves, setCalves, saveCalvesData, readCalvesData, onSubmitCalves, onChangeCalvesText] = useCalvesData()

  const [chest, setChest, saveChestData, readChestData, onSubmitChest, onChangeChestText] = useChestData()

  const [forearms, setForearms, saveForearmsData, readForearmsData, onSubmitForearms, onChangeForearmsText] = useForearmsData()

  const [hips, setHips, saveHipsData, readHipsData, onSubmitHips, onChangeHipsText] = useHipsData()

  const [shoulders, setShoulders, saveShouldersData, readShouldersData, onSubmitShoulders, onChangeShouldersText] = useShouldersData()

  const [thighs, setThighs, saveThighsData, readThighsData, onSubmitThighs, onChangeThighsText] = useThighsData()

  const [waist, setWaist, saveWaistData, readWaistData, onSubmitWaist, onChangeWaistText] = useWaistData()

  useEffect(() => {
    readWeightData()
    readArmsData()
    readBodyFatData()
    readCalvesData()
    readChestData()
    readForearmsData()
    readHipsData()
    readShouldersData()
    readThighsData()
    readWaistData()
  }, [])

  return (
    <>
      <Text style={styles.title}>Measurements</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.row} >
          <Text style={styles.label}>Weight</Text>
          <TextInput 
            value={weight}
            onChangeText={onChangeWeightText}
            onSubmitEditing={onSubmitWeight}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitWeight}
          >Save
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Arms</Text>
          <TextInput 
            value={arms}
            onChangeText={onChangeArmsText}
            onSubmitEditing={onSubmitArms}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitArms}
          >Save
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Waist</Text>
          <TextInput 
            value={waist}
            onChangeText={onChangeWaistText}
            onSubmitEditing={onSubmitWaist}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitWaist}
          >Save
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Chest</Text>
          <TextInput 
            value={chest}
            onChangeText={onChangeChestText}
            onSubmitEditing={onSubmitChest}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitChest}
          >Save
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Thighs</Text>
          <TextInput 
            value={thighs}
            onChangeText={onChangeThighsText}
            onSubmitEditing={onSubmitThighs}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitThighs}
          >Save
          </Button>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 85 }}>
        <View style={styles.row}>
          <Text style={styles.label}>BodyFat%</Text>
          <TextInput 
            value={bodyFat}
            onChangeText={onChangeBodyFatText}
            onSubmitEditing={onSubmitBodyFat}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitBodyFat}
          >Save
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Forearms</Text>
          <TextInput 
            value={forearms}
            onChangeText={onChangeForearmsText}
            onSubmitEditing={onSubmitForearms}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitForearms}
          >Save
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Hips</Text>
          <TextInput 
            value={hips}
            onChangeText={onChangeHipsText}
            onSubmitEditing={onSubmitHips}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitHips}
          >Save
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Shoulders</Text>
          <TextInput 
            value={shoulders}
            onChangeText={onChangeShouldersText}
            onSubmitEditing={onSubmitShoulders}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitShoulders}
          >Save
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Calves</Text>
          <TextInput 
            value={calves}
            onChangeText={onChangeCalvesText}
            onSubmitEditing={onSubmitCalves}
          />
          <Button
            compact
            mode='outlined'
            onPress={onSubmitCalves}
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