import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Pressable} from 'react-native'
import React, { useState} from 'react'
import styles from './styles'
import backBtn from '../../assets/img/backbtn.png'
import { useDispatch, useSelector } from 'react-redux';

const Checkout = ({navigation, route}) => {
    const [deliveMethod, setDeliveMethod] = useState('Door Delivery')
    const {display_name, delivery_adress, phone} = useSelector(state=>state.profile.value)
    const [editable, setEditable] = useState(false)
    const {name, image, price, count} = route.params
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.top}>
            <Image source={backBtn}/>
            <Text style={styles.textTop}>Checkout</Text>
        </View>
        <Text style={styles.titleText}>Delivery</Text>
        <View style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between', width : '100%'}}>
            <Text style={{fontSize : 17, fontWeight : '700', color : '#000000'}}>Adress Detail</Text>
            <Text style={{fontSize : 15, fontWeight : '400', color : '#6A4029'}} onPress={()=>{
                setEditable(true)
            }}>Change</Text>
        </View>
        <View style={styles.cardAdress}>
            <Text style={{borderBottomWidth : 1, borderBottomColor : '#666', paddingBottom : 8}}>{display_name}</Text>
            <TextInput style={styles.input} defaultValue={`${delivery_adress}`} editable={editable}/>
            <Text>+62 {phone}</Text>
        </View>
        <Text style={{marginTop : 30, marginBottom : 13, fontSize : 17, fontWeight : '700', color : '#000000'}}>Delivery Method</Text>
        <View style={styles.cardAdress}>
            <View style={{display:'flex', width : '100%', flexDirection : 'row', justifyContent : 'space-between'}}>
                <Pressable style={deliveMethod === 'Door Delivery' ? styles.checkBulletAct : styles.checkBullet} onPress={()=>{
                    setDeliveMethod('Door Delivery')
                }}></Pressable>
                <Text>Door Delivery</Text>
            </View>
            <View style={{display:'flex', width : '100%', flexDirection : 'row', justifyContent : 'space-between', marginTop : 10}}>
                <Pressable style={deliveMethod === 'Pick up' ? styles.checkBulletAct : styles.checkBullet} onPress={()=>{
                    setDeliveMethod('Pick up')
                }}></Pressable>
                <Text>Pick up at Store</Text>
            </View>
            <View style={{display:'flex', width : '100%', flexDirection : 'row', justifyContent : 'space-between', marginTop : 10}}>
                <Pressable style={deliveMethod === 'Dine in' ? styles.checkBulletAct : styles.checkBullet} onPress={()=>{
                    setDeliveMethod('Dine in')
                }}></Pressable>
                <Text>Dine in</Text>
            </View>
        </View>
        <View style={{display : 'flex', flexDirection : 'row', width : '100%', justifyContent : 'space-between', marginTop : 20, alignItems : 'center'}}>
            <Text style={{fontSize : 17, fontWeight : '400', color : '#000000'}}>Total</Text>
            <Text style={{fontSize : 22, fontWeight : '700', color : '#000000'}}>{price * count}</Text>
        </View>
        <TouchableOpacity style={styles.payment} onPress={()=>{
            navigation.navigate('Payment', {
                user : {
                    display_name,
                    delivery_adress,
                    phone,
                    deliveMethod
                },
                product : {
                    name, 
                    image,
                    price, 
                    count
                }
            })
        }}>
            <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '700'}}>Proceed to payment</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default Checkout