import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function product() {
  const {id}=useLocalSearchParams()
  
  
  return (
    
    <View>
      <Stack.Screen options={{title:'Details',headerTitleAlign:'center'}}/>
      <Text>Product id is: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})