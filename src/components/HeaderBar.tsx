import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBgIcon from './GradientBgIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps{
    title?: string;

}

const HeaderBar:React.FC<HeaderBarProps>= ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
        <GradientBgIcon name="menu" color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16}/>
        <Text style={styles.HeaderText}>
            {title}
        </Text>
        <ProfilePic/>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    HeaderContainer:{
        padding:SPACING.space_24,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:30,
    },
    HeaderText:{
        fontSize:FONTSIZE.size_20,
        fontFamily:FONTFAMILY.poppins_semibold,
        color:COLORS.primaryWhiteHex,
    },


})