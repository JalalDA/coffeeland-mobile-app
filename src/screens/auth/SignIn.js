import { View, Text, ImageBackground, StatusBar, TextInput, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import bg from '../../assets/img/login.png'
import google from '../../assets/img/google.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, deleteUserInfo } from '../../redux/slice/loginSlice'
import Toast from 'react-native-toast-message';
// import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = ({navigation}) => {
    console.log(process.env.SERVER_HOST);
    const [body, setBody] = useState({
        email : '',
        password : ''
    })
    const dispatch = useDispatch()
    const {msg, isSucces, token} = useSelector(state=>state.login)
    console.log(isSucces, token);
    useEffect(()=>{
        if(token){
            navigation.navigate('Drawer')
        }
        if(isSucces === false){
            Toast.show({
                type : 'error',
                text1 : msg
            })
        }
    }, [isSucces])

    return (
    <>
    <StatusBar barStyle={'light-content'}/>
    <ImageBackground source={bg} style={{flex : 1}}>
        <View style={styles.overLay}>
            <Text style={styles.textWellcome}>Login</Text>
            <View>
                <TextInput 
                    // secureTextEntry={true}
                    style={styles.textInput} 
                    placeholder='Enter your email adress' 
                    placeholderTextColor={'#FFFFFF'} 
                    onChangeText={(text)=>{
                        setBody({...body, email : text})
                    }}/>
                <TextInput 
                    secureTextEntry={true}
                    style={styles.textInput} 
                    placeholder='Enter your password' 
                    placeholderTextColor={'#FFFFFF'}
                    onChangeText={(text)=>{
                        setBody({...body, password : text})
                    }}/>
                <Text onPress={()=>{
                    navigation.navigate('Forgot')
                }} style={{fontSize : 14, marginTop : 10, color : '#FFFFFF', borderBottomColor:'#FFFFFF', borderBottomWidth : 1, width:120}}>Forgot Password?</Text>
                <Pressable style={styles.buttonLogin} onPress={()=>{
                    dispatch(getUserInfo(body))
                }}>
                    <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '700'}}>Login</Text>
                </Pressable>
                <Pressable style={styles.btnGoogle} onPress={()=>{
                        dispatch(deleteUserInfo())
                    }
                }>
                    <Image source={google} style={{marginRight : 10}}/>
                    <Text style={{fontSize : 17, fontWeight : '700', color : '#000000'}}>Create With Google</Text>
                </Pressable>
            </View>
            <Toast position='top'/>
        </View>
    </ImageBackground>
    </>
)
}

export default SignIn