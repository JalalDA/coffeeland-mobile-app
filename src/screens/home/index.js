import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import bg from '../../assets/img/bgimage.png'

const Home = ({navigation}) => {
  return (
    <View style={{flex : 1}}>
        <ImageBackground style={styles.image} source={bg}>
        <Text style={styles.textWellcome}>Coffe For Everyone</Text>
        <Pressable onPress={()=>{
            navigation.navigate('Auth')
        }} style={styles.button}>
                <Text style={{color : '#000000', fontSize :17, fontWeight : '700'}}>Get Started</Text>
            </Pressable>
        </ImageBackground>
    </View>
  )
}

export default Home