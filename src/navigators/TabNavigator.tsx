import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import Icons from 'react-native-vector-icons/Foundation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'




const Tab=createBottomTabNavigator();
const TabNavigator = () => {
  return (
  <Tab.Navigator screenOptions={{headerShown:false,
    tabBarHideOnKeyboard:true,
    tabBarShowLabel:false,
    tabBarStyle:styles.tabBarStyle,
    tabBarBackground:()=>(
        <BlurView overlayColor='' blurAmount={15}
        style={styles.BlurViewStyle}/>
    )
  }}  >
    <Tab.Screen name="Home" component={HomeScreen}
    options={{
        tabBarIcon:({focused,color ,size})=>(
            <Icons name='home' size={32} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex} 
           
           />
        )
    }}></Tab.Screen>
    <Tab.Screen name="Cart Screen" component={CartScreen}
     options={{
        tabBarIcon:({focused,color ,size})=>(
            <Icon name='cart' size={32} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
        )
    }}></Tab.Screen>
    <Tab.Screen name="Favorite" component={FavoriteScreen}
     options={{
        tabBarIcon:({focused,color ,size})=>(
            <Icons name='heart' size={32} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
        )
    }}></Tab.Screen>
    <Tab.Screen name="Order History" component={OrderHistoryScreen}
     options={{
        tabBarIcon:({focused,color ,size})=>(
            <Icon name='bell' size={32} color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}/>
        )
    }}></Tab.Screen>
  </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarStyle:
    {
        height:60,
        position:"absolute",
        
        backgroundColor:COLORS.primaryBlackRGBA,
        borderTopWidth:0,
        elevation:0,
        alignItems:"center",
        justifyContent:"center",
        borderTopColor:'transparent'
    },
    BlurViewStyle:{
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,



    },
})