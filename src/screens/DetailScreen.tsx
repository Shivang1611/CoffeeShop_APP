import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/FontAwesome5"

const DetailScreen = () => {
  return (
   <View style={styles.ScreenConatiner}>
    <View style={styles.header}>
      <Icons name="arrow-left" size={24} color="#000" />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Detail Screen</Text>

    </View>

   </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})