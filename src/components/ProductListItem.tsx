import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Product } from "../types";
 type productListType={
    product:Product;
 }
  export default function ProductListItem({product}:productListType){
    // console.log(props);
   
    return(<Link href={`/menu/${product.id}`} asChild>
        <Pressable style={styles.container}>
      <Image 
        source={{uri:product.image ||  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'}}
        style={styles.image}
        resizeMode="contain"/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
      
    </Pressable>
    </Link>
    )
  }


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
    flex:1,
    maxWidth:'50%',
    
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical:10
  },
  price:{
    color:Colors.light.tint,
    fontWeight:'bold'
  },
  image:{
    width:'100%',
    aspectRatio:1
  }
  
});
