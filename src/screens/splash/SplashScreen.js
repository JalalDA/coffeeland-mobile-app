import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import logo from '../../assets/img/coffeLogo.png'
import { useSelector } from 'react-redux'

const SplashScreen = ({navigation}) => {

  const {token} = useSelector(state=>state.login)
    useEffect(()=>{
        setTimeout(()=>{
          if(token){
            navigation.navigate('Drawer')
          }else{
            navigation.navigate('Home')
          }
        }, 3000)
    }, [])
  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor={'#FFBA33'}/>
    <View style={styles.container}>
        <Image source={logo} style={{height : 50, width : 50}}/>
      <Text style={styles.logoText}>Coffeelands</Text>
    </View>
    </>
  )
}

export default SplashScreen