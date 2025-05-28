import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SPACING } from '../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface GradentBGIconProps{
    name:string;
    color:string;
    size:number;
}

const GradientBgIcon:React.FC<GradentBGIconProps> = ({name,color,size}) => {
  return (
    <View style={styles.Container}>
      <LinearGradient style={styles.lineargradientBG}
      start={{x:0,y:0}}
      end={{x:1,y:1}}
      colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}>
        <Icon name={name} color={color} size={size}/>
      </LinearGradient>
    </View>
  )
}



const styles = StyleSheet.create({
    Container:{
        borderWidth:2,
        borderColor:COLORS.secondaryDarkGreyHex,
        borderRadius:SPACING.space_12,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.secondaryDarkGreyHex,
        overflow:"hidden",
    },
    lineargradientBG:{
        height:SPACING.space_36,
        width:SPACING.space_36,
        alignItems:"center",
        justifyContent:"center",
    },
})
export default GradientBgIcon