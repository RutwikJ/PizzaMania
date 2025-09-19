import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Product } from "../types";

export const defaultPizzaImage='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'
 type productListType={
    product:Product;
 }
  export default function ProductListItem({product}:productListType){
    // console.log(props);
   
    return(<Link href={`/menu/${product.id}`} asChild>
        <Pressable style={styles.container}>
      <Image 
        source={{uri:product.image ||  defaultPizzaImage}}
        style={styles.image}
        resizeMode="contain"/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price[1]}</Text>
      
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
    marginVertical:10,
    textAlign:'center'
  },
  price:{
    color:Colors.light.tint,
    fontWeight:'bold',
    marginTop:'auto',
    
  },
  image:{
    width:'100%',
    aspectRatio:1
  }
  
});
