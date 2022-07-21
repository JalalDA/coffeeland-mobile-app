import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import backBtn from '../../assets/img/backbtn.png'
import styles from './styles'


const Cart = ({navigation, route}) => {
  const [count, setCount] = useState(1)
  console.log(route);
  const {name, image, price} = route.params
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Image source={backBtn}/>
            <Text style={styles.textTop}>Cart</Text>
        </View>
        <View style={styles.card}>
            <Image source={{uri:image}} style={{width : 70, height:70, borderRadius:50}}/>
            <View style={{display:'flex', alignItems : 'center', justifyContent:'center', width:'70%'}}>
              <Text style={{fontSize : 17, fontWeight:'700', color:'#000000', marginBottom:10}}>{name}</Text>
              <View style={{flexDirection : 'row', display : 'flex', width : '90%', alignItems : 'center', justifyContent : 'space-between'}}>
                <Text style={{fontSize : 15, fontWeight:'400', color:'#895537'}}>{price}</Text>
                <View style={styles.counter}>
                  <Text style={styles.textConter} onPress={()=>{
                    if(count!== 0){
                      setCount(count-1)
                    }
                  }}>-</Text>
                  <Text style={styles.textConter}>{count}</Text>
                  <Text onPress={()=>{
                      setCount(count+1)
                    }} style={styles.textConter}>+</Text>
                </View>
              </View>
            </View>
        </View>
        <TouchableOpacity style={styles.checkout} onPress={()=>{
          navigation.navigate('Checkout', {
            name,
            image,
            price,
            count
          })
        }} >
          <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '700'}}>Confirm and Checkout</Text>
        </TouchableOpacity>
        {/* <View style={styles.checkout}>
          <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '700'}}>Confirm and Checkout</Text>
        </View> */}
    </View>
  )
}

export default Cart