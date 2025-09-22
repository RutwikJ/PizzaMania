import CardListItem from '@/components/CardListItem'
import { useCart } from '@/providers/cartProvider'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, Platform, StyleSheet, View } from 'react-native'

export default function cartScreen() {
 const {items}=useCart()
  return (
    <View>
      <FlatList data={items} renderItem={({item})=><CardListItem cartItem={item}/>}/>
       <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({})