import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from  'react-native-vector-icons/MaterialCommunityIcons'

const App = () => {
  return (
    <View>
      <Icon  name={"apple"} size={100} color={"white"}/>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})