import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import coldBrew from '../../assets/img/coldBrew.png'
import backbtn from '../../assets/img/backbtn.png'
import cart from '../../assets/img/cart.png'
import styles from './styles'
import { getDetailProduct } from '../../modules/axios'


const Product = ({navigation, route}) => {
  const [product, setProduct] = useState({})
  const {id} = route.params
  console.log(product);
  useEffect(()=>{
    const getSingelProduct = async ()=>{
      try {
        const res = await getDetailProduct(id)
        setProduct(res.data.data)
      } catch (error) {
        console.log(error);
        console.error(error)
      }
    }
    getSingelProduct()
  }, [id])

  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.top}>
        <Image source={backbtn}/>
        <Image source={cart}/>
      </View>
      <View style={styles.productInfo}>
        <Image source={{uri:product.pictures}}/>
        <View style={{marginTop : 49}}>
          <Text style={{fontSize : 28, fontWeight : '900', color : '#000000'}}>{product.name}</Text>
          <Text style={{fontSize : 22, fontWeight : '700', color : '#6A4029'}}>{product.price}</Text>
        </View>
      </View>
      <Text style={{fontSize : 17, fontWeight : '900', color : '#000000', marginTop : 40}}>Delivery Info</Text>
      <Text style={{fontSize : 15, fontWeight : '400', color : '#000000', opacity : 0.5}}>Delivered only on monday until friday from 1 pm to 7 pm</Text>
      <Text style={{fontSize : 17, fontWeight : '900', color : '#000000', marginTop : 40}}>Description</Text>
      <Text style={{fontSize : 15, fontWeight : '400', color : '#000000', opacity : 0.5}}>{product.descriptions}</Text>
      <TouchableOpacity style={styles.btnCart} onPress={()=>{
        navigation.navigate('Cart', {
          image : product.pictures,
          name : product.name,
          price : product.price,
        })
      }}>
        <Text style={{fontSize : 17, fontWeight : '700', color : '#FFFFFF'}}>Add to cart</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

export default Product