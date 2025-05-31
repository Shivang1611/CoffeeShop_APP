import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BGIcon from './BGIcon';

const CARD_WIDTH=Dimensions.get("window").width *0.32
interface CoffeeCardProps{
    id:string;
    index:string;
    type:string;
    rosted:string;
    imagelink_square:ImageProps;
    name:string;
    special_ingredient:string;
    average_rating:number;
    prices:any;
    buttomPressHandler:any;
}
const CoffeeCard:React.FC<CoffeeCardProps> = ({id,index, type,rosted,imagelink_square,name,special_ingredient,average_rating,prices,buttomPressHandler}) => {
  return (
   <LinearGradient 
   start={{x:0,y:0}}
   end={{x:1,y:1}}
   style={styles.cardLineargradientContainer}
   colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}>
    <ImageBackground source={imagelink_square} resizeMode="cover" style={styles.cardImageBackground}>
      <View style={styles.cardRAtingContainer}>
        <Icon name={'star'} color={COLORS.primaryOrangeHex } size={FONTSIZE.size_16}/>
        <Text style={styles.cardRAtingText}>{average_rating}</Text>
      </View>
    </ImageBackground>
     <Text style={styles.cardTittle}>{name}</Text>
     <Text style={styles.cardSubtittile}>{special_ingredient}</Text>
     <View style={styles.cardfooterRow}>

      <Text style={styles.cardPriceCurrency}>
  {prices.currency || '$'}
  <Text style={styles.cardPrice}>
    {prices.price}
  </Text>
</Text>
      <TouchableOpacity onPress={()=>{}}>
        <BGIcon 
        color={COLORS.primaryWhiteHex }
        size={FONTSIZE.size_8}
        name={'add'} 
        BGColor={COLORS.primaryOrangeHex}/>
      </TouchableOpacity>
     </View>
   </LinearGradient>
  

  )
}

export default CoffeeCard

const styles = StyleSheet.create({
  cardImageBackground:{
    width:CARD_WIDTH,
    height:CARD_WIDTH,
    borderRadius:BORDERRADIUS.radius_20,
    marginBottom:SPACING.space_15,
    overflow:"hidden",
    
  },
  cardRAtingContainer:{
      flexDirection:"row",
      backgroundColor:COLORS.primaryBlackRGBA,
      alignItems:"center",
      justifyContent:"center",
      gap:SPACING.space_10,
      paddingHorizontal:SPACING.space_15,
      position:"absolute",
      borderBottomLeftRadius:BORDERRADIUS.radius_20,
      borderBottomRightRadius:BORDERRADIUS.radius_20,
      top:0,
      right:0,

  },
  cardRAtingText:{
  fontFamily:FONTFAMILY.poppins_medium,
  fontSize:FONTSIZE.size_12,
  color:COLORS.primaryWhiteHex,
  lineHeight:22,

  },
  cardLineargradientContainer:{
    padding:SPACING.space_15,
    borderRadius:BORDERRADIUS.radius_25,
    
  },
  cardTittle:{
    fontFamily:FONTFAMILY.poppins_medium,
  fontSize:FONTSIZE.size_16,
  color:COLORS.primaryWhiteHex,


  },
  cardSubtittile:{
    fontFamily:FONTFAMILY.poppins_light,
    fontSize:FONTSIZE.size_10,
    color:COLORS.primaryWhiteHex,
  },
  cardfooterRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:SPACING.space_15,
  },
  cardPriceCurrency:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_18,
    color:COLORS.primaryOrangeHex,

  },
  cardPrice:{
    color:COLORS.primaryWhiteHex,
  },

})