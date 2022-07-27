import { View, Text, Image, TextInput, ScrollView, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import seacrh from '../../assets/img/search.png'
import { getAllProduct, filterProduct } from '../../modules/axios'
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

const FilterProducts = ({navigation}) => {
    const [actMenu, setActMenu] = useState('all')
    const [all, setAll] = useState([])
    const [search, setSeacrch] = useState('')
    const [limit, setLimit] = useState(6)
    const [sort, setSort] = useState('price')
    const [order, setOrder] = useState('asc')
    const {role} = useSelector(state=>state.login)
    const renderProduct = ({item})=>(
        <Product name={item.name} pictures={item.pictures} price={item.price} id={item.id} navigation={navigation}/>
    )


    // console.log(role);
    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                let params = `name=${search}&sort=${sort}&order=${order}&limit=${limit}&category=${actMenu}`
                if(actMenu === 'favorit'){
                    params = 'favorit'
                    const fav = await getAllProduct(params)
                    setAll(fav.data.data)
                }
                if(actMenu === 'all'){
                    params = ''
                    const allProduct = await getAllProduct(params)
                    setAll(allProduct.data.data)
                }else if(actMenu !== 'favorit'){
                    const res = await filterProduct(params)
                    setAll(res.data.data.data)
                    console.log(res.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    }, [actMenu, search, order])

  return (
    <>
    <View style={styles.container}>
    <View style={styles.searchColumn}>
        <Image source={seacrh} style={{marginRight : 10}}/>
        <TextInput placeholder={'Search'} onChangeText={(text)=>{
            setSeacrch(text)
        }}></TextInput>
    </View>
    <TouchableOpacity
        onPress={()=>{
            if(order === 'asc'){
                setOrder('desc')
            }else{
                setOrder('asc')
            }
        }}
        style={styles.sort}>
        <Text style={{color : '#FFFFFF', fontSize : 14, fontWeight : '700'}}>{order === 'asc' ? "Most Expensive" : "Cheapest"}</Text>
    </TouchableOpacity>
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
        <Text style={ actMenu === 'non_coffee' ? styles.textBarAct : styles.textBar} onPress={()=>{
            setActMenu('non_coffee')
        }}>Non Coffee</Text>
    </ScrollView>
    <FlatList data={all} renderItem={renderProduct} numColumns={2} onEndReached={()=>{
        setLimit(limit+6)
    }}/>
    {/* <Text>{all.map(item=>(
        <Text>{item.price}</Text>
    ))}</Text> */}
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

export default FilterProducts