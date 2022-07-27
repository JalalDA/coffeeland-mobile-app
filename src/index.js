import React from 'react';
import {StatusBar, Text, View, ImageBackground, Pressable, ToastAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './screens/auth';
// import Profile from './screens/profile';
import Home from './screens/home';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Forgot from './screens/auth/Forgot';
import Homepage from './screens/homepage';
import Product from './screens/product/product';
import MyDrawer from './screens/drawer';
import Cart from './screens/cart';
import Checkout from './screens/cart/Checkout';
import Payment from './screens/cart/Payment';
import Reset from './screens/auth/Reset';
import History from './screens/cart/History';
import SplashScreen from './screens/splash/SplashScreen';
import ImagePicker from './components/imagePicker/ImagePicker';
import Products from './screens/products/Products';
import EditProduct from './screens/editProduct/EditProduct';
import AddProduct from './screens/addProduct/AddProduct';
import FilterProducts from './screens/products/FilterProducts';

const Router = () => {
  const Stack = createNativeStackNavigator()
  return (
    <>
    <StatusBar barStyle={'dark-content'}/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown : false}}/>
        <Stack.Screen name='image' component={ImagePicker} options={{headerShown : false}} />
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Auth' component={Auth} options={{headerShown:false}}/>
        <Stack.Screen name='Sign In' component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name='Sign Up' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='Forgot' component={Forgot} options={{headerShown : false}}/>
        <Stack.Screen name='Homepage' component={Homepage} options={{headerShown : false}}/>
        <Stack.Screen name='Product' component={Product} options={{headerShown : false}}/>
        <Stack.Screen name='Drawer' component={MyDrawer} options={{headerShown : false}}/>
        <Stack.Screen name='Cart' component={Cart} options={{headerShown : false}}/>
        <Stack.Screen name='Checkout' component={Checkout} options={{headerShown : false}}/>
        <Stack.Screen name='Payment' component={Payment} options={{headerShown : false}}/>
        <Stack.Screen name='Reset' component={Reset} options={{headerShown : false}}/>
        <Stack.Screen name='History' component={History} options={{headerShown : false}}/>
        <Stack.Screen name='Products' component={Products} options={{headerShown : false}}/>
        <Stack.Screen name='EditProduct' component={EditProduct} options={{headerShown : false}}/>
        <Stack.Screen name='AddProduct' component={AddProduct} options={{headerShown : false}}/>
        <Stack.Screen name='Filter' component={FilterProducts} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default Router;
