import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from  'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'

import PaymentScreen from './screens/PaymentScreen'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import TabNavigator from './navigators/TabNavigator'

const Stack=createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name='Tab' component={TabNavigator} 
      options={{animation:"slide_from_bottom"}}>
        </Stack.Screen>
      <Stack.Screen name='Details' component={DetailScreen} 
      options={{animation:"slide_from_bottom"}}>
        </Stack.Screen>
    
      <Stack.Screen name='Payment' component={PaymentScreen} 
      options={{animation:"slide_from_bottom"}}>
      

      </Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})