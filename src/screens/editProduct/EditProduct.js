import { View, Text, Image, ScrollView, Pressable, ActivityIndicator, PermissionsAndroid, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDetailProduct } from '../../modules/axios'
import styles from './styles'
import backBtn from '../../assets/img/backbtn.png'
import pencil from '../../assets/img/pencil.png'
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { updateProduct } from '../../modules/axios'
import { useSelector } from 'react-redux'
import  Toast  from 'react-native-toast-message'
import axios from 'axios'


const EditProduct = ({navigation, route}) => {
    const [load, setLoad] = useState(false)
    const [product, setProduct] = useState({})
    const {id} = route.params
    const [imageCamera, setImageCamera] = useState('')
    const {token} = useSelector(state=>state.login)
    const [editAble, setEditAble] = useState(false)
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDesc, setProductDesc] = useState('')

    //function to open camera
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
                        // console.log(data);
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
    //function to open image from gallery
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
                const data = res.assets[0]
                setImageCamera(data)
            }
        })
    }
    //function to edit Product
    const editProduct = async ()=>{
        try {
            setLoad(true)
            let data = new FormData()
            data.append('pictures', {
                uri : imageCamera.uri,
                name : imageCamera.fileName,
                size : imageCamera.fileSize,
                type : imageCamera.type
            })
            data.append('name', productName)
            data.append('price', productPrice)
            data.append('descriptions', productDesc)
            console.log(data);
            await updateProduct(id, data, token)
            // const res = axios.patch(`https://coffeelands.herokuapp.com/product/:${id}`, data)
            alert('update success')
            Toast.show({
                type : 'success', 
                text1 : "success"
            })
            setLoad(false)
        } catch (error) {
            console.log(error.response);
            Toast.show({
                type : 'error', 
                text1 : 'Error '
            })
            setLoad(false)
        }
    }
    useEffect(()=>{
        //function to get product info
        const getSingleProduct = async ()=>{
            try {
                setLoad(true)
                const res = await getDetailProduct(id)
                setProduct(res.data.data)
                setLoad(false)
            } catch (error) {
                console.log(error);
                setLoad(false)
            }
        }
        getSingleProduct()
    }, [])
    // console.log(product);
  return (

    <View style={styles.container}>
        <Toast/>
        <ScrollView>
        <View style={styles.top}>
            <Image source={backBtn}/>
            <Pressable 
                onPress={()=>{
                    setEditAble(true)
                }}
                style={styles.bgPencil}>
                <Image style={{height : 12, width : 12}} source={pencil}/>
            </Pressable>
        </View>
        <View style={styles.productInfo}>
            <Image style={{borderRadius : 50, height : 100, width : 100}} source={ imageCamera ? {uri : imageCamera.uri} : {uri : product.pictures}}/>
            {editAble ?
            <View style={{display : 'flex', flexDirection : 'row', marginTop : 10, width : '70%', justifyContent : 'space-between'}}> 
            <Pressable style={styles.btnImage} onPress={requestCameraPermission}>
                <Text style={{color : '#FFFFFF', fontSize : 14, fontWeight : '700'}}>Open Camera</Text>
            </Pressable>
            <Pressable style={styles.btnImage} onPress={openGalery}>
                <Text style={{color : '#FFFFFF', fontSize : 14, fontWeight : '700'}}>Open Galery</Text>
            </Pressable>
            </View>
            : <></>}
            <TextInput 
                style={styles.productName} 
                defaultValue={product && product.name} 
                editable={editAble} 
                onChangeText={text=>{
                    setProductName(text)
                }}/>
            <TextInput 
                style={styles.productPrice} 
                defaultValue={product && product.price} 
                editable={editAble}
                onChangeText={text=>{
                    setProductPrice(text)
                }}/>
        </View>
        <View style={{marginTop : 20}}>
            <Text style={styles.productName}>Delivery Info</Text>
            <Text style={styles.deliveryInfo}>Delivered only on monday until friday from 1 pm to 7 pm</Text>
        </View>
        <View style={{marginTop : 20}}>
            <Text style={styles.productName}>Description</Text>
            <TextInput 
                style={styles.deliveryInfo} 
                defaultValue={ product&& product.descriptions} 
                editable={editAble}
                onChangeText={text=>{
                    setProductDesc(text)
                }}/>
        </View>
        <Pressable style={styles.btnSave} onPress={editProduct}>
            {load ? <ActivityIndicator size={'small'} color={'#FFFFFF'}/> : <Text style={{color : '#FFFFFF', fontSize : 18, fontWeight : '700'}}>Save Change</Text>}
        </Pressable>
        </ScrollView>
    </View>
  )
}

export default EditProduct