import { View, Text, StatusBar, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import bg from '../../assets/img/bgForgot.png'
import styles from './styles'
import { reset } from '../../modules/axios'
import Toast from 'react-native-toast-message'

const Reset = ({navigation, route}) => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [code, setCode] = useState('')
    // const [msg, setMsg] = useState('')
    const {email} = route.params 
    const forgotPassword = async()=>{ 
        try {
            const body = {
                code,
                email,
                newPassword, 
                confirmPassword
            }
            const result = await reset(body)
            // setMsg(result.data.msg)
            Toast.show({
                type : 'success',
                text1 : result.data.msg,
                text2 : 'Please login again'
            })
            navigation.navigate('Sign In')
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

  return (
<>
    <StatusBar barStyle={'light-content'}/>
    <ImageBackground source={bg} style={{flex : 1}}>
        <View style={styles.overLay}>
            <View style={styles.topText}>
            <Text style={styles.textWellcome}>Email sent</Text>
            <Text style={styles.text}>Enter your pin that we've been sent to your email</Text>
            </View>
            <View>
                <TextInput style={styles.textInput} placeholder='Please enter the code' onChangeText={(text)=>{
                    setCode(text)
                }} placeholderTextColor={'#FFFFFF'}/>
                <TextInput style={styles.textInput} onChangeText={(text)=>{
                    setNewPassword(text)
                }
                } placeholder='Enter your new password' placeholderTextColor={'#FFFFFF'}/>
                <TextInput style={styles.textInput} placeholder='Enter your confirm password' placeholderTextColor={'#FFFFFF'} onChangeText={(text)=>{
                    setConfirmPassword(text)
                }}/>
                <TouchableOpacity onPress={forgotPassword} style={styles.btn}><Text style={{color : '#FFFFFF', fontSize : 16, fontWeight : '700'}}>Reset Password</Text></TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
    </>
  )
}

export default Reset