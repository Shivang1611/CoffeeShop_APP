import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'


const FavoriteScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <HeaderBar title="Favorites" />
     
    </View>
  )
}



const styles = StyleSheet.create({
  ScreenContainer:{
    flex:1,
    backgroundColor:COLORS.primaryBlackHex,

},
})
export default FavoriteScreen