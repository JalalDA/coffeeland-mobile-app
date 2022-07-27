import { View, Text, Image, TextInput, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import seacrh from '../../assets/img/search.png'
import { getAllProduct } from '../../modules/axios'
import { useSelector } from 'react-redux'
import pencil from '../../assets/img/pencil.png'


const Product = ({pictures, name, price, id, navigation})=>{
    const {role} = useSelector(state=>state.login)
    return <View style={styles.productWrap} >
      <Image style={styles.imageProduct} source={{uri:pictures}}/>
      <Text onPress={()=>{
        navigation.navigate('Product', {id})
      }} style={styles.titleProduct}>{name}</Text>
      <Text style={styles.priceProduct}>{price}</Text>
      {role === 'admin' ? <Pressable style={styles.pencilBg} onPress={()=>{
        navigation.navigate('EditProduct', {id})
      }}>
        <Image style={{height : 12, width : 12}} source={pencil}/>
      </Pressable> : <></>}
      </View>
  }

const Products = ({navigation}) => {
    const [actMenu, setActMenu] = useState('all')
    const [favProduct, setFavProduct] = useState([])
    const [all, setAll] = useState([])
    const [coffee, setCoffee] = useState([])
    const [nonCoffe, setNonCoffee] = useState([])
    const [food, setFood] = useState([])
    const [search, setSeacrch] = useState('')
    const [limit, setLimit] = useState(6)
    const {role} = useSelector(state=>state.login)
    const renderProduct = ({item})=>(
        <Product name={item.name} pictures={item.pictures} price={item.price} id={item.id} navigation={navigation}/>
    )


    // console.log(role);
    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                let params = ''
                if(limit){
                    params += `?limit=${limit}`
                }
                if(search){
                    params +=`&name=${search}`
                }
                if(actMenu === 'favorit'){
                    params = `favorit?limit=${limit}&name=${seacrh}`
                }
                if(actMenu === 'food'){
                    params = `?catogory_id=1`
                }
                if(actMenu === 'coffee'){
                    params = `?catogory_id=2`
                }
                if(actMenu === 'noncoffee'){
                    params = `?catogory_id=3`
                }
                const res = await getAllProduct(params)
                setAll(res.data.data)
                // console.log('test');
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    }, [actMenu, search])

  return (
    <>
    <View style={styles.container}>
    <View style={styles.searchColumn}>
        <Image source={seacrh} style={{marginRight : 10}}/>
        <TextInput placeholder={'Search'} onChangeText={(text)=>{
            setSeacrch(text)
        }}></TextInput>
    </View>
    <ScrollView style={styles.menuBar} horizontal={true}>
        <Text style={ actMenu === 'all' ? styles.textBarAct : styles.textBar} onPress={()=>{
            setActMenu('all')
        }}>All</Text>
        <Text style={ actMenu === 'favorit' ? styles.textBarAct : styles.textBar} onPress={()=>{
            setActMenu('favorit')
        }}>Favorit</Text>
        <Text style={ actMenu === 'food' ? styles.textBarAct : styles.textBar} onPress={()=>{
            setActMenu('food')
        }}>Food</Text>
        <Text style={ actMenu === 'coffee' ? styles.textBarAct : styles.textBar} onPress={()=>{
            setActMenu('coffee')
        }}>Coffee</Text>
        <Text style={ actMenu === 'noncoffee' ? styles.textBarAct : styles.textBar} onPress={()=>{
            setActMenu('noncoffee')
        }}>Non Coffee</Text>
    </ScrollView>
    <FlatList data={all} renderItem={renderProduct} numColumns={2} onEndReached={()=>{
        setLimit(limit+6)
    }}/>
    {role === 'admin' ? 
    <Pressable 
        onPress={()=>{
            navigation.navigate('AddProduct')
        }}
        style={styles.addButton}>
        <Text style={{color : '#FFFFFF', fontSize : 18, fontWeight : '900'}}>+</Text>
    </Pressable> : <></>}
    </View>
    </>
  )
}

export default Products