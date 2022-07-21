import { View, Text, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfileInfo } from '../../redux/slice/profileSlice'
import { deleteUserInfo } from '../../redux/slice/loginSlice';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import Homepage from '../homepage';
import styles from './styles';
import Toast from 'react-native-toast-message';
import nulProfile from '../../assets/img/nullProfile.png'

import Profile from '../profile';

  const CustomDrawer = (props)=>{
    const {photo, display_name, email} = useSelector(state=>state.profile.value)
    const dispatch = useDispatch()
    return (
        <>
        <View style={styles.pofileContainer}>
            <Image style={styles.profileImg} source={photo ? {uri : photo} : nulProfile}/>
            <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '600', marginTop : 10}}>{display_name}</Text>
            <Text style={{color : '#FFFFFF', fontSize : 14, fontWeight : '400', marginTop : 10}}>{email}</Text>
        </View>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
                {/* <DrawerItem onPress={()=>props.navigation.closeDrawer} label="Close Drawer"/>
                <DrawerItem onPress={()=>props.navigation.toggleDrawer} label="Togle Drawer"/> */}
                <DrawerItem onPress={()=>{
                  const loggedout = dispatch(deleteUserInfo())
                  if(loggedout){
                    props.navigation.navigate('Sign In')
                  }
                }} label="Log out"/>
        </DrawerContentScrollView>
        </>
    )
  }

const Drawer = createDrawerNavigator()


const MyDrawer = () => {

  const {token, isSucces} = useSelector(state=>state.login)
  console.log(token);
  const dispatch = useDispatch()
  useEffect(()=>{
    if(isSucces){
      Toast.show({
          type : 'success',
          text1 : 'Success'
      })
  }
    const getProfile = async ()=>{
      try {
        dispatch(getProfileInfo(token))
      } catch (error) {
        console.log(error);
      }
    }
    if(token){
      getProfile()
    }
}, [])
  return (
    <Drawer.Navigator 
        useLegacyImplementation={true}
        drawerContent={(props)=><CustomDrawer {...props}/>}
        initialRouteName='Homepage'
        >
        <Drawer.Screen name='Homepage' component={Homepage} options={{headerShown : false}}/>
        <Drawer.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}

export default MyDrawer