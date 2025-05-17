import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/Store'
import {  useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const getCategoriesfromDate=(data:any)=>{
  let temp:any={};
  for(let i=0;i=data.length();i++)
  {
    if(temp[data[i].name]==undefined)
    {
      temp[data[i].name]=1;

    }
    else{
      temp[data[i].name]++;
    }
  }
  let Categories=Object.keys(temp);
  Categories.unshift("All");
  return Categories;

}

const getCoffeeList=(categories:string,data:any)=>{
  if(categories=="All")
  {
    return data;
  }
  else
  {
    let coffeelist=data.filter((item:any)=>item.name==categories)
    return coffeelist;
  }
}
const HomeScreen = () => {
    const CoffeeList =useStore((state: any)=> state.CoffeeList)
    const BeanList =useStore((state: any)=> state.BeanList)

    const [categories , SetCategories]=useState(getCategoriesfromDate(CoffeeList));
    const [SearchText,SetSearchText]=useState(undefined);
    const[CategoryIndex,SetCategoryIndex]=useState({
      index:0,
      category:categories[0],
      
    });
    const [sortedCoffee ,setsortedCoffee]=useState((CategoryIndex.category,CoffeeList));
    const tabBarHeight=useBottomTabBarHeight();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}



const styles = StyleSheet.create({})
export default HomeScreen