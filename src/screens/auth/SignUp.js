import { View, Text, ImageBackground, StatusBar, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import bg from '../../assets/img/signup.png'
import google from '../../assets/img/google.png'
import { register } from '../../modules/axios'
import Toast from 'react-native-toast-message';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const signUp = async ()=>{
        try {
            const body = {
                email,
                password,
                phone
            }
            const result = await register(body)
            Toast.show({
                type : 'success',
                text1 : result.data.msg
            })
            if(result){
                navigation.navigate('Sign In')
            }
        } catch (error) {
            console.log(error);
            Toast.show({
                type : 'error',
                text1 : error.response.data.msg
            })
        }
    }
    
  return (
    <>
    <StatusBar barStyle={'light-content'}/>
    <ImageBackground source={bg} style={{flex : 1}}>
        <View style={styles.overLay}>
            <Text style={styles.textWellcome}>Sign Up</Text>
            <View>
                <TextInput style={styles.textInput} placeholder='Enter your email adress' placeholderTextColor={'#FFFFFF'} onChangeText={(text)=>{
                    setEmail(text)
                }}/>
                <TextInput style={styles.textInput} placeholder='Enter your password' placeholderTextColor={'#FFFFFF'}
                onChangeText={(text)=>{
                    setPassword(text)
                }}
                />
                <TextInput style={styles.textInput} placeholder='Enter your phone number' placeholderTextColor={'#FFFFFF'}
                onChangeText={(text)=>{
                    setPhone(text)
                }}
                />
                <Pressable style={styles.btn}>
                    <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '700'}} onPress={signUp}>Create Account</Text>
                </Pressable>
                <Pressable style={styles.btnGoogle}>
                    <Image source={google} style={{marginRight : 10}}/>
                    <Text style={{fontSize : 17, fontWeight : '700', color : '#000000'}}>Create With Google</Text>
                </Pressable>
            </View>
        </View>
        <Toast/>
    </ImageBackground>
    </>
  )
}

export default SignUp