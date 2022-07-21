import { View, Text, ImageBackground, Pressable, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'
import bg from '../../assets/img/auth.png'

const Auth = ({navigation}) => {
  return (
    <View style={{flex : 1}}>
      <StatusBar barStyle={'light-content'}/>
        <ImageBackground style={styles.image} source={bg}>
          <View style={styles.overLay}>
          <View>
            <Text style={styles.textWellcome}>Wellcome</Text> 
            <Text style={styles.text}>Get a cup of coffee for free every sunday morning</Text>
          </View>
          <View style={styles.btnWrap}>
            <Pressable onPress={()=>{
            navigation.navigate('Sign Up')
        }} style={styles.button}>
                <Text style={{color : '#FFFFFF', fontSize :17, fontWeight : '700'}}>Create New Account</Text>
            </Pressable>
            <Pressable onPress={()=>{
            navigation.navigate('Sign In')
        }} style={styles.buttonLogin}>
                <Text style={{color : '#000000', fontSize :17, fontWeight : '700'}}>Login</Text>
            </Pressable>
          </View>
          </View>
        </ImageBackground>
    </View>
  )
}

export default Auth