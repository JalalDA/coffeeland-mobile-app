import { View, Text, Image, Pressable, TextInput, ScrollView, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import backBtn  from '../../assets/img/backbtn.png'
import trash  from '../../assets/img/trash.png'
import cameraIcon  from '../../assets/img/cameraIcon.png'
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { createProduct } from '../../modules/axios'
import { useSelector } from 'react-redux'
import axios from 'axios'


const AddProduct = () => {
    const [imageCamera, setImageCamera] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [deliveryInfo, setDeliveryInfo] = useState('')
    const [description, setDescriptiton] = useState('')
    const {token} = useSelector(state=>state.login)
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
                const options = {
                    mediaType : "photo",
                    quality : 1
                }
        
                launchCamera(options, (res)=>{
                    if(res.didCancel){
                        console.log("User cancel image picker");
                    }else if(res.errorCode){
                        console.log(res.errorMessage);
                    }else {
                        const data = res.assets
                        console.log(data);
                        setImageCamera(data[0])
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
        const options = {
            mediaType : "photo",
            quality : 1
        }
        launchImageLibrary(options, (res)=>{
            if(res.didCancel){
                console.log("User cancel image picker");
            }else if(res.errorCode){
                console.log(res.errorMessage);
            }else {
                const data = res.assets
                console.log(data);
                setImageCamera(data[0])
            }
        })
    }

    const saveProduct = async () =>{
        try {
            const data = new FormData()
            data.append('pictures', {
                uri : imageCamera.uri,
                name : imageCamera.fileName,
                type : imageCamera.type
            })
            data.append('name', productName)
            data.append('price', productPrice)
            data.append('descriptions', description)
            // const res = await axios.post(`https://coffeelands.herokuapp.com/product`, data, )
            const res = await createProduct(data, token)
            alert(res.data.msg)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(imageCamera.uri);
    return (
    <>
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.top}>
            <Image source={backBtn}/>
            <Text>New Product</Text>
            <Pressable style={styles.bgtrash}>
                <Image source={trash}/>
            </Pressable>
        </View>
        <Pressable style={styles.bgCamera}>
            <Image 
                source={imageCamera? {uri:imageCamera.uri} :  cameraIcon} 
                style={imageCamera ? {height : 150, width : 150, borderRadius : 75} : {height : 100, width : 100}}/>
        </Pressable>
        <View style={styles.btnImage}>
            <Pressable style={styles.btnCamera} onPress={requestCameraPermission}>
                <Text style={{color : '#FFFFFF', fontSize : 14, fontWeight : '700'}}>From Camera</Text>
            </Pressable>
            <Pressable style={styles.btnCamera} onPress={openGalery}>
                <Text style={{color : '#FFFFFF', fontSize : 14, fontWeight : '700'}}>From Gallery</Text>
            </Pressable>
        </View>
        <View style={styles.input}>
            <Text style={styles.textLabel}>Name</Text>
            <TextInput 
                onChangeText={text=>setProductName(text)}
                style={styles.textInput} 
                placeholder='Input the product name'/>
        </View>
        <View style={styles.input}>
            <Text style={styles.textLabel}>Price</Text>
            <TextInput 
                
                onChangeText={text=>setProductPrice(text)}
                style={styles.textInput} 
                placeholder='Input the product price'/>
        </View>
        <View style={styles.input}>
            <Text style={styles.textLabel}>Delivery Info</Text>
            <TextInput 
            keyboardType='number'
                onChangeText={text=>setDeliveryInfo(text)}
                style={styles.textInput} 
                placeholder='Input the delivery Info'/>
        </View>
        <View style={styles.input}>
            <Text style={styles.textLabel}>Description</Text>
            <TextInput
                onChangeText={text=>setDescriptiton(text)}
                style={styles.textInput} 
                placeholder='Input the description'/>
        </View>
        <Pressable
            onPress={saveProduct}
            style={styles.btnSave} >
            <Text style={{color : '#FFFFFF', fontSize : 18, fontWeight : '700'}}>Save Product</Text>
        </Pressable>
    </View>
    </ScrollView>
    </>
  )
}

export default AddProduct