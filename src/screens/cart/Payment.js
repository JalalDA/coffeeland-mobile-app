import { View, Text, Image, Pressable, ActivityIndicator, Modal } from 'react-native'
import React, { useState } from 'react'
import backBtn from '../../assets/img/backbtn.png'
import styles from './styles'
import card from '../../assets/img/card.png'
import bank from '../../assets/img/bank.png'
import cod from '../../assets/img/cod.png'
import { createTransaction } from '../../modules/axios'
import { useSelector } from 'react-redux'
import { sendPaymentNotification } from "../../helpers/Notification";

const Payment = ({navigation, route}) => {
  const [paymentMethod, setPaymentMethod] = useState('Card')
  const [showModal, setShowModal] = useState(false)
  const [load, setLoad] = useState(false)
  const [msg, setMsg] = useState("")
  const {product, user} = route.params
  const total_payment = product.count * product.price
  const {token} = useSelector(state=>state.login)

  const pay = async ()=>{
    try {
      setLoad(true)
      const body = {
        product_name : product.name,
        address : user.delivery_adress,
        total_payment,
        paymentmethod : paymentMethod,
        delivery_method : user.deliveMethod,
        product_image : product.image
      }
      const res = await createTransaction(body, token)
      console.log(res);
      sendPaymentNotification('Payment success', `Thankyou for your ordering ${product.name}`)
      setMsg("Transaction success")
      setShowModal(true)
      setLoad(false)
      setTimeout(()=>{
        navigation.navigate('Drawer')
      }, 2000)
    } catch (error) {
      console.log(error);
      setMsg(error.response.data.msg)
      setShowModal(true)
      setLoad(false)
    }
  }
  return (
    <View style={styles.container}>
      <Modal  animationType='slide'
          transparent={true}
          visible={showModal}
          onRequestClose={()=>{
            setShowModal(!showModal)
                        }}>
                          <View style={styles.modalView}>
                          <View style={styles.cardModal}>
                            <Text style={{color : "#FFFFFF", fontSize : 18, fontWeight : '700', marginBottom : 20}}>{msg}</Text>
                            <Pressable style={styles.btnOption} onPress={()=>{
                              setShowModal(!showModal)
                            }}>
                              <Text>OK</Text>
                            </Pressable>
                          </View>
                          </View>
      </Modal>
        <View style={styles.top}>
            <Image source={backBtn}/>
            <Text style={styles.textTop}>Payment</Text>
        </View>
        <View style={{marginTop : 30}}>
            <Text style={styles.textTop}>Products</Text>
            <View style={styles.card}>
                <Image source={{uri:product.image}} style={{height : 70, width : 70, borderRadius: 50}}/>
                <View style={{width : '50%'}}>
                  <Text style={{fontSize : 17, fontWeight : '700', color : '#000000', width : '50%'}}>{product.name}</Text>
                  <Text>X {product.count}</Text>
                </View>
                <Text style={{fontSize : 18, fontWeight : '700', color : '#000000'}}>{product.price}</Text>
            </View>
        </View>
        <View style={{marginTop : 30}}>
            <Text style={styles.textTop}>Payment</Text>
            <View style={styles.cardPayment}>
              <View style={styles.singlePayment}>
              <Pressable 
              style={paymentMethod === 'Card'? styles.paymentMethodAct : styles.paymentMethod}
              onPress={()=>{
                setPaymentMethod('Card')
              }}
              ></Pressable>
                <View style={ {backgroundColor : '#F47B0A', padding : 13, borderRadius : 10, marginRight : 20}}>
                  <Image source={card}/>
                </View>
                <Text style={{fontSize : 18, fontWeight : '700', color : '#000000'}}>Card</Text>
              </View>
              <View style={styles.singlePayment}>
              <Pressable 
              style={paymentMethod === 'Bank Account'? styles.paymentMethodAct : styles.paymentMethod}
              onPress ={()=>{
                setPaymentMethod('Bank Account')
              }}
              ></Pressable>
                <View style={ {backgroundColor : '#895537', padding : 12, borderRadius : 10, marginRight : 20}}>
                  <Image source={bank}/>
                </View>
                <Text style={{fontSize : 18, fontWeight : '700', color : '#000000'}}>Bank Account</Text>
              </View>
              <View style={styles.singlePayment}>
              <Pressable 
              style={paymentMethod === 'Cash On Delivery'? styles.paymentMethodAct : styles.paymentMethod}
              onPress={()=>{
                setPaymentMethod('Cash On Delivery')
              }}
              ></Pressable>
                <View style={ {backgroundColor : '#FFBA33', padding : 12, borderRadius : 10, marginRight : 20}}>
                  <Image source={cod}/>
                </View>
                <Text style={{fontSize : 18, fontWeight : '700', color : '#000000'}}>Cash On Delivery</Text>
              </View>
            </View>
            <Pressable style={styles.payment}>
              <Text style={{color : '#FFFFFF', fontSize : 17, fontWeight : '700'}} onPress={pay}>
                {load ? <ActivityIndicator size={'small'} color={'#FFA32B'}/> : 'Proceed Payment'}
              </Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Payment