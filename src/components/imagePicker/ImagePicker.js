import { View, Text, Pressable, Image, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

const ImagePicker = () => {
    const [imageCamera, setImageCamera] = useState(null)

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
                        setImageCamera(data[0].uri)
                    }
                })
            }else{
                console.log(`Camera permissions denied`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // const openCamera = ()=>{

    // }

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
                setImageCamera(data[0].uri)
            }
        })
    }
  return (
    <View style={{flex : 1, backgroundColor : '#FFA32B', display : 'flex', alignItems : 'center', justifyContent : 'center', padding : 50}}>
      <Image source={{uri:imageCamera}} style={{height : 100, width : 100, marginTop : 10, borderRadius : 50}}/>
      <Pressable onPress={requestCameraPermission}
      style={{display : 'flex', alignItems : 'center', justifyContent : 'center', padding : 20, width : '100%', backgroundColor : '#666', borderRadius : 20, marginTop : 20}}>
        <Text style={{color : '#FFFFFF', fontSize : 20, fontWeight : '700'}}>Open Camera</Text>
      </Pressable>
      <Pressable onPress={openGalery}
      style={{display : 'flex', alignItems : 'center', justifyContent : 'center', padding : 20, width : '100%', backgroundColor : '#666', borderRadius : 20, marginTop : 20}}>
        <Text style={{color : '#FFFFFF', fontSize : 20, fontWeight : '700'}}>Open Galery</Text>
      </Pressable>
    </View>
  )
}

export default ImagePicker