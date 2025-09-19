import Button from '@/components/Button';
import { defaultPizzaImage } from '@/components/ProductListItem';
import { PizzaSize } from '@/types';
import products from '@assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

// const product=products[0]
const sizeIndex = {
  S: 0,
  M: 1,
  L: 2,
  XL: 3
};

const sizes:PizzaSize[]=['S','M','L','XL']

export default function productDetailsPage() {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M')
  const {id}=useLocalSearchParams()
  const product =products.find((p)=>p.id.toString()===id)
  const addToCart=()=>{
    console.warn('Adding to cart,size:',setSelectedSize);
    
  }
  if(!product){
  return(<View><Text>no product found</Text></View>)
}

  return (
    
    <View style={styles.container}>
      <Stack.Screen options={{title:product?.name,headerTitleAlign:'center'}}/>
      <Image style={styles.productDetailImage} source={{uri:product.image|| defaultPizzaImage}} resizeMode='contain'/>
      <Text style={styles.selectSizeText}>Select a size</Text>
      <View  style={styles.sizes}>
        {sizes.map((s)=>
                <Pressable
                    onPress={()=>setSelectedSize(s)}
                     key={s} style={[styles.size,{backgroundColor:s===selectedSize?'skyblue':'#cfecf7'}]}>
                  <Text style={[styles.sizeText,{color:s===selectedSize?'black':'grey'}]}>{s}</Text>
                </Pressable>)}
      </View>
      <Text style={styles.price}>₹{product?.price[sizeIndex[selectedSize]]}</Text>
      <Button onPress={addToCart} text='Add to cart'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    padding:10
  },

  productDetailImage:{
    width:'100%',
    aspectRatio:1
  },
  price:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:'auto'
  },
  selectSizeText:{
    fontSize:24,
    alignSelf:'center'
  },
  sizes:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10
  },
  size:{
    backgroundColor:'skyblue',
    borderRadius:25,
    width:50,
    aspectRatio:1,
    justifyContent:'center',
    alignItems:'center'
  },
  
  sizeText:{
    fontSize:20,
    fontWeight:'500'
  },
  
})