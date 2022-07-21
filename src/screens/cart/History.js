import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import backbtn from '../../assets/img/backbtn.png'
// import huzelnut from '../../assets/img/huzelnut.png'
import { useSelector } from 'react-redux'
import { getHistory } from '../../modules/axios'


const History = () => {
    const {id} = useSelector(state=>state.profile.value)
    // const {token} = useSelector(state=>state.login) 
    const [product, setProduct] = useState([])
    useEffect(()=>{
        const getUserHistory = async ()=>{
            try {
                const result = await getHistory(id)
                setProduct(result.data.data)
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
        getUserHistory()
    }, [])
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Image source={backbtn}/>
            <Text style={styles.textTop}>Order History</Text>
        </View>
        {product.map((item)=>(
                    <View style={styles.card}>
                    <Image source={item.product_image} style={{width : 70, height:70, borderRadius:50}}/>
                    <View style={{display:'flex', alignItems : 'center', justifyContent:'center', width:'70%'}}>
                      <Text style={{fontSize : 17, fontWeight:'700', color:'#000000', marginBottom:10}}>{item.product_name}</Text>
                      <View style={{flexDirection : 'row', display : 'flex', width : '90%', alignItems : 'center', justifyContent : 'center'}}>
                        <Text style={{fontSize : 15, fontWeight:'400', color:'#895537'}}>{item.total_payment}</Text>
                      </View>
                    </View>
                </View>
        ))} 
    </View>
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