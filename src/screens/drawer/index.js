import { View, Text, Button, Image, StatusBar, Modal, ActivityIndicator, Pressable } from 'react-native'
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
import { logout } from '../../modules/axios';

import Profile from '../profile';

  const CustomDrawer = (props)=>{
    const {photo, display_name, email} = useSelector(state=>state.profile.value)
    const dispatch = useDispatch()
    const {token} = useSelector(state=>state.login)
    // console.log(token);
    const [modalShow, setModalShow] = useState(false)
    const [load, setLoad] = useState(false)
    const logoutServer = async ()=>{
      try {
        setLoad(true)
        // const res = await logout(token)
        // console.log(res.data.msg);
        const res = dispatch(deleteUserInfo())
        setLoad(false)
        if(res){
            props.navigation.navigate('Sign In')
        }
      } catch (error) {
        console.log(error.response);
        setLoad(false)
      }
    }
    return (
        <>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
        <View style={styles.pofileContainer}>
            <Image style={styles.profileImg} source={photo ? {uri : photo} : nulProfile}/>
            <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '600', marginTop : 10}}>{display_name}</Text>
            <Text style={{color : '#FFFFFF', fontSize : 14, fontWeight : '400', marginTop : 10}}>{email}</Text>
        </View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalShow}
          onRequestClose={()=>{
            setModalShow(!modalShow)
          }}>
            <View style={styles.modalView}>
              <View style={styles.cardModal}> 
                <Text style={{color : '#FFFFFF', fontSize : 18, fontWeight : '700'}}>Do you wanna logout?</Text>
              <View style={styles.option}>
              <Pressable style={styles.btnOption} 
                onPress={logoutServer}>
                {load ? <ActivityIndicator size={'small'} color={'#FFA32B'}/> : <Text>Yes</Text>}</Pressable>
              <Pressable style={styles.btnOption} 
                onPress={()=>{
                setModalShow(false)
              }}><Text>No</Text></Pressable>
            </View>
            </View>
            </View>
          </Modal>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
                {/* <DrawerItem onPress={()=>props.navigation.closeDrawer} label="Close Drawer"/>
                <DrawerItem onPress={()=>props.navigation.toggleDrawer} label="Togle Drawer"/> */}
                <DrawerItem onPress={()=>{
                  setModalShow(true)
                  // const loggedout = 
                  // dispatch(deleteUserInfo())
                  // if(loggedout){
                  //   props.navigation.navigate('Sign In')
                  // }
                }} label="Log out"/>
        </DrawerContentScrollView>
        </>
    )
  }

const Drawer = createDrawerNavigator()


const MyDrawer = ({navigation}) => {
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
    if(!token){
      navigation.navigate('Sign In')
    }
}, [token])
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