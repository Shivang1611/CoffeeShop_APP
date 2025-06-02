import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';


const CartScreen = () => {
  return (
    <View style={styles.ScreenConatiner}>
      <HeaderBar title="Cart" />
      

      
    </View>
  )
}



const styles = StyleSheet.create({
  ScreenConatiner:{
     flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
})
export default CartScreen