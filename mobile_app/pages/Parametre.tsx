import { View, Text } from 'react-native'
import Card from '../components/Card/Card'
import React, { useEffect, useState } from 'react'
import { categories } from '../services/Api/categories/categories'
import CheckBox from 'expo-checkbox'

export default function Parametre() {
  const plateform = ['all', 'pc', 'browser']
  const [AllCheckBox, setAllCheckBox] = useState(true)
  const [PCCheckBox, setPCCheckBox] = useState(false)
  const [BrowserCheckBox, setBrowserCheckBox] = useState(false)
  function Allfunction() {
    setAllCheckBox(true)
    setPCCheckBox(false)
    setBrowserCheckBox(false)
    global.plateform = 'all'
  }
  function PCfunction() {
    setAllCheckBox(false)
    setPCCheckBox(true)
    setBrowserCheckBox(false)
    global.plateform = 'pc'
  }
  function Browserfunction() {
    setAllCheckBox(false)
    setPCCheckBox(false)
    setBrowserCheckBox(true)
    global.plateform = 'browser'
  }
  return (
    <View>
      <Text>All</Text>
      <CheckBox value={AllCheckBox} onValueChange={() => Allfunction()} />
      <Text>PC</Text>
      <CheckBox value={PCCheckBox} onValueChange={() => PCfunction()} />
      <Text>Browser</Text>
      <CheckBox value={BrowserCheckBox} onValueChange={() => Browserfunction()} />
    </View>
  )
}
