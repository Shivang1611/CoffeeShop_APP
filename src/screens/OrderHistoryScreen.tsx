import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBar from '../components/HeaderBar'
import { COLORS } from '../theme/theme'

const OrderHistoryScreen = () => {
  return (
    <View  style={styles.ScreenContainer}>
      <HeaderBar title='Order History' />
      
    </View>
  )
}




const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1,
    backgroundColor:COLORS.primaryBlackHex,
  },
})
export default OrderHistoryScreen