import { View, Text, Image, ScrollView, Pressable, Modal, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import backbtn from '../../assets/img/backbtn.png'
// import huzelnut from '../../assets/img/huzelnut.png'
import { useSelector } from 'react-redux'
import { getHistory, deleteHistory } from '../../modules/axios'
import  Toast  from 'react-native-toast-message'


const History = () => {
    const {token} = useSelector(state=>state.login) 
    const [product, setProduct] = useState([])
    const [idProduct, setIdProduct] = useState('')
    const [modalShow, setModalShow] = useState(false)
    const [load, setLoad] = useState(false)

    const softDeleteHistory = async ()=>{
      try {
        setLoad(true)
        const body = {
          idProduct
        }
        if(idProduct){
          await deleteHistory(body)
        }
        Toast.show({
          type : 'success', 
          text1 : 'Succes delete an item'
        })
        setTimeout(()=>{
          setLoad(false)
          setModalShow(!modalShow)
        }, 2000)
      } catch (error) {
        console.log(error);
        Toast.show({
          type : 'error', 
          text1 : 'Failed delete an item'
        })
        setLoad(false)
      }
    }
    useEffect(()=>{
        const getUserHistory = async ()=>{
            try {
                const result = await getHistory(token)
                setProduct(result.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getUserHistory()
    }, [product])
  return (
    <>
    <StatusBar barStyle={'dark-content'}/>
    <View style={styles.container}>
        <View style={styles.top}>
            <Image source={backbtn}/>
            <Text style={styles.textTop}>Order History</Text>
        </View>
        <ScrollView>
        <Toast/>
        <Modal 
          animationType='slide'
          transparent={true}
          visible={modalShow}
          onRequestClose={()=>{
          setModalShow(!modalShow)
                        }}>
          <View style={styles.modalView}>
            <View style={styles.cardModal}> 
            <Text style={{color : '#FFFFFF', fontSize : 18, fontWeight : '700'}}>Delete item?</Text>
            <View style={styles.option}>
            <Pressable style={styles.btnOption} onPress={softDeleteHistory}>
              {load ? <ActivityIndicator size={'small'} color={'#FFA32B'}/> : <Text>Yes</Text>}</Pressable>
            <Pressable style={styles.btnOption} onPress={()=>{
            setModalShow(false)
            }}><Text>No</Text></Pressable>
            </View>
            </View>
            </View>
          </Modal>
        {product.map((item)=>(
                    <Pressable style={styles.card} key={item.id} onLongPress={()=>{
                      setIdProduct(item.id)
                      setModalShow(true)
                    }}>
                    <Image source={{uri : item.product_image}} style={{width : 70, height:70, borderRadius:50}}/>
                    <View style={{display:'flex', alignItems : 'center', justifyContent:'center', width:'70%'}}>
                      <Text style={{fontSize : 17, fontWeight:'700', color:'#000000', marginBottom:10}}>{item.product_name}</Text>
                      <View style={{flexDirection : 'row', display : 'flex', width : '90%', alignItems : 'center', justifyContent : 'center'}}>
                        <Text style={{fontSize : 15, fontWeight:'400', color:'#895537'}}>{item.total_payment}</Text>
                      </View>
                    </View>
                </Pressable>
        ))} 
        </ScrollView>
    </View>
    </>
  )
}

export default History

// export default const History = () => {

//   return (
//     <View style={styles.container}>
//         <View style={styles.top}>
//             <Image source={backbtn}/>
//             <Text style={styles.textTop}>Order History</Text>
//         </View>
//         {/* {product.map((item)=>(
//                     <View style={styles.card}>
//                     <Image source={item.product_image} style={{width : 70, height:70, borderRadius:50}}/>
//                     <View style={{display:'flex', alignItems : 'center', justifyContent:'center', width:'70%'}}>
//                       <Text style={{fontSize : 17, fontWeight:'700', color:'#000000', marginBottom:10}}>{item.product_name}</Text>
//                       <View style={{flexDirection : 'row', display : 'flex', width : '90%', alignItems : 'center', justifyContent : 'center'}}>
//                         <Text style={{fontSize : 15, fontWeight:'400', color:'#895537'}}>{item.total_payment}</Text>
//                       </View>
//                     </View>
//                 </View>
//         ))} */}
//         {/* <View style={styles.card}>
//             <Image source={huzelnut} style={{width : 70, height:70, borderRadius:50}}/>
//             <View style={{display:'flex', alignItems : 'center', justifyContent:'center', width:'70%'}}>
//               <Text style={{fontSize : 17, fontWeight:'700', color:'#000000', marginBottom:10}}>huzelnut</Text>
//               <View style={{flexDirection : 'row', display : 'flex', width : '90%', alignItems : 'center', justifyContent : 'center'}}>
//                 <Text style={{fontSize : 15, fontWeight:'400', color:'#895537'}}>20000</Text>
//               </View>
//             </View>
//         </View> */}
//     </View>
//   )
// }

// export default History