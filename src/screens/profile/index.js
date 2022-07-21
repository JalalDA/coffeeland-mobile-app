import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import backBtn from '../../assets/img/backbtn.png'
import styles from './styles'
// import zulaikha from '../../assets/img/zulaikha.png'
import arrow from '../../assets/img/arrow.png'
import { useSelector } from 'react-redux'


const Profile = ({navigation}) => {
    const[editable, setEditable] = useState(false)
    const {display_name, photo, email, delivery_adress, phone} = useSelector(state=>state.profile.value)
  return (
    <View style={{padding : 30, paddingBottom : 10, paddingRight : 10}}>
        <ScrollView >
        <Image source={backBtn}/>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.topCard}>
            <Text style={styles.topText}>Your Information</Text>
            <Text style={{color : '#6A4029', fontSize : 15, fontWeight : '400'}} onPress={()=>{
                setEditable(true)
            }}>Edit</Text>
        </View>
        <View style={styles.cardProfile}>
            <TextInput style={{position : 'absolute'}}></TextInput>
            <Image source={{uri:photo}} style={{width : 100, height : 100, borderRadius : 50}}/>
            <View style={{width:'55%'}}>
                <TextInput style={styles.line} editable={editable}>{display_name}</TextInput>
                <TextInput style={styles.line} editable={editable}>{email}</TextInput>
                <TextInput style={styles.line} editable={editable}>{phone}</TextInput>
                <TextInput style={styles.line} editable={editable}>{delivery_adress}</TextInput>
            </View>
        </View>
        <Pressable style={styles.cardView} onPress={()=>{
            navigation.navigate('History')
        }}>
            <Text style={{fontSize : 18, fontWeight : '700', color : '#000000'}}>Order History</Text>
            <Image source={arrow}/>
        </Pressable>
        <View style={styles.cardView}>
            <Text style={{fontSize : 18, fontWeight : '700', color : '#000000'}}>Edit Password</Text>
            <Image source={arrow}/>
        </View>
        <View style={styles.cardView}>
            <Text style={{fontSize : 18, fontWeight : '700', color : '#000000'}}>FAQ</Text>
            <Image source={arrow}/>
        </View>
        <View style={styles.cardView}>
            <Text style={{fontSize : 18, fontWeight : '700', color : '#000000'}}>Help</Text>
            <Image source={arrow}/>
        </View>
        <Pressable style={styles.btn}>
            <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '700'}}>Save Change</Text>
        </Pressable>
        </ScrollView>
    </View>
  )
}

export default Profile