import { View, Text, StatusBar, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import bg from '../../assets/img/bgForgot.png'
import styles from './styles'
import { forgot } from '../../modules/axios'

const Forgot = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    
    const forgotPassword = async()=>{
        try {
            const body = {
                email
            }
            const result = await forgot(body)
            setMsg(result.data.msg)
            navigation.navigate('Reset', {email})
        } catch (error) {
            console.log(error);
            alert(error.response.data.msg)
        }
    }

  return (
<>
    <StatusBar barStyle={'light-content'}/>
    <ImageBackground source={bg} style={{flex : 1}}>
        <View style={styles.overLay}>
            <View style={styles.topText}>
            <Text style={styles.textWellcome}>Don’t Worry!</Text>
            <Text style={styles.text}>Enter your email adress to get reset password link</Text>
            </View>
            <View>
                <TextInput style={styles.textInput} onChangeText={(text)=>{
                    setEmail(text)
                }
                } placeholder='Enter your email adress' placeholderTextColor={'#FFFFFF'}/>
                <TouchableOpacity onPress={forgotPassword} style={styles.btn}><Text style={{color : '#FFFFFF', fontSize : 16, fontWeight : '700'}}>Send Link</Text></TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
    </>
  )
}

export default Forgot