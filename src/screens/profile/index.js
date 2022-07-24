import { View, Text, Image, ScrollView, TextInput, Pressable, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import backBtn from '../../assets/img/backbtn.png'
import styles from './styles'
// import zulaikha from '../../assets/img/zulaikha.png'
import arrow from '../../assets/img/arrow.png'
import { useSelector } from 'react-redux'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { updateProfile } from '../../modules/axios'


const Profile = ({navigation}) => {
    const[editable, setEditable] = useState(false)
    const {display_name, photo, email, delivery_adress, phone} = useSelector(state=>state.profile.value)
    const [imagePicker, setImagePicker] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const {token} = useSelector(state=>state.login)

    const options = {
        mediaType : 'photo', 
        quality : 1
    }

    const saveChange = async ()=>{

        try {
            const data = new FormData()
                data.append('photo', {
                    uri : imagePicker.uri,
                    name : imagePicker.fileName,
                    type : imagePicker.type
                })
                data.append('display_name', display_name)
                data.append('email', email)
                data.append('phone', phoneNumber ? phoneNumber : phone )
                data.append('delivery_adress', delivery_adress)
            const res = await updateProfile(data, token)
            alert(res.data.msg)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const requestCameraPermission = async ()=>{
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title : "App Camera Permissions", 
                    message : "App need to acces to your camera",
                    buttonNeutral : "Ask Me later", 
                    buttonNegative : 'Cancel',
                    buttonPositive : "OK"
                }
            )
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                console.log(`Camera permissions given`);
                launchCamera(options, (res)=>{
                    if(res.didCancel){
                        console.log("User cancel image picker");
                    }else if(res.errorCode){
                        console.log(res.errorMessage);
                    }else {
                        const data = res.assets
                        console.log(data);
                        setImagePicker(data[0])
                    }
                })
            }else{
                console.log(`Camera permissions denied`);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const openGalery = ()=>{
        launchImageLibrary(options, (res)=>{
            if(res.didCancel){
                console.log(`User canceled image picker`);
            }else if(res.errorCode){
                console.log(res.errorMessage);
            }else{
                const data = res.assets
                setImagePicker(data[0])
                console.log(data);
            }
        })
    }
  return (
    <View style={{padding : 20, paddingBottom : 10}}>
        <ScrollView >
        <Image source={backBtn}/>
        <Text onPress={()=>{
            navigation.navigate('image')
        }} style={styles.title}>My Profile</Text>
        <View style={styles.topCard}>
            <Text style={styles.topText}>Your Information</Text>
            <Text style={{color : '#6A4029', fontSize : 15, fontWeight : '400'}} onPress={()=>{
                setEditable(true)
            }}>Edit</Text>
        </View>
        <View style={styles.cardProfile}>
            <TextInput style={{position : 'absolute'}}></TextInput>
            <View style={styles.imgProfile}>
                <Image source={imagePicker ?{uri:imagePicker.uri} : {uri:photo}} style={{width : 100, height : 100, borderRadius : 50}}/>
                <Pressable onPress={openGalery} style={styles.btnImage}><Text style={{color : '#FFFFFF', fontSize : 14, fontWeight : '700'}}>Open Galery</Text></Pressable>
                <Pressable onPress={requestCameraPermission} style={styles.btnImage}><Text style={{color : '#FFFFFF', fontSize : 14, fontWeight : '700'}}>Open Camera</Text></Pressable>
            </View>
            <View style={{width:'55%'}}>
                <TextInput style={styles.line} editable={editable}>{display_name}</TextInput>
                <TextInput style={styles.line} editable={editable}>{email}</TextInput>
                <TextInput onChangeText={(text)=>setPhoneNumber(text)} style={styles.line} editable={editable}>{phone}</TextInput>
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
        <Pressable style={styles.btn} onPress={saveChange}>
            <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '700'}}>Save Change</Text>
        </Pressable>
        </ScrollView>
    </View>
  )
}

export default Profile