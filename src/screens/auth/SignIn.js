import { View, Text, ImageBackground, StatusBar, TextInput, Pressable, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import bg from '../../assets/img/login.png'
import google from '../../assets/img/google.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, deleteUserInfo, pushUserInfo } from '../../redux/slice/loginSlice'
import Toast from 'react-native-toast-message';
import { signIn } from '../../modules/axios'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = ({navigation}) => {
    const [load, setLoad] = useState(false)
    const [body, setBody] = useState({
        email : '',
        password : ''
    })
    const dispatch = useDispatch()
    const {token} = useSelector(state=>state.login)

    const login = async ()=>{
        try {
            setLoad(true)
            const result = await signIn(body)
            dispatch(pushUserInfo(result.data))
            Toast.show({
                type : 'success', 
                text1 : result.data.msg
            })
            setLoad(false)
            setTimeout(()=>{
                navigation.navigate('Drawer')
            }, 1000)
        } catch (error) {
            console.log(error);
            Toast.show({
                type : 'error', 
                text1 : error.response.data.msg
            })
            setLoad(false)
        }
    }
    useEffect(()=>{
        if(token){
            navigation.navigate('Drawer')
        }
    }, [token])

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
                <Pressable style={styles.buttonLogin} onPress={login}> 
                    <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '700'}}>
                        {load ? <ActivityIndicator size={'small'} color={'#FFFFFF'}/> : 'Login'}
                    </Text>
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