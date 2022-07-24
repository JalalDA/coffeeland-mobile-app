import { View, Text, Image, StatusBar, TextInput, FlatList, ScrollView, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import togle from '../../assets/img/togle.png'
import cart from '../../assets/img/cart.png'
import seacrh from '../../assets/img/search.png'
import styles from './styles'
import huzelnut from '../../assets/img/huzelnut.png'
import { getFavProduct, getCategoryProduct } from '../../modules/axios'

const menuBar = [
  {title : 'Favorit'},
  {title : 'Promo'},
  {title : 'Coffee'},
  {title : 'Non Coffee'},
]

const menuProduct = [
  {
    id : 1,
    img : huzelnut,
    title : 'Huzelnut Latte',
    price : 20000
  },
  {
    id : 2,
    img : huzelnut,
    title : 'Title',
    price : 20000
  },
  {
    id : 3,
    img : huzelnut,
    title : 'Title',
    price : 20000
  },
  {
    id : 4,
    img : huzelnut,
    title : 'Title',
    price : 20000
  }
]
const Item = ({title, actMenu, setActMenu})=>{
  return <View style={styles.menuBar}>
    <Text style={actMenu  === title ? styles.textMenuAct : styles.textMenu} onPress={()=>{
      setActMenu(title)
    }}>{title}</Text>
  </View>
}
const Product = ({pictures, name, price, id, navigation})=>{
  return <View style={styles.productWrap} >
    <Image style={styles.imageProduct} source={{uri:pictures}}/>
    <Text onPress={()=>{
      navigation.navigate('Product', {id})
    }} style={styles.titleProduct}>{name}</Text>
    <Text style={styles.priceProduct}>{price}</Text>
        </View>

}



const Homepage = ({navigation}) => {
  const [actMenu, setActMenu] = useState('Favorit')
  const [favProduct, setFavProduct] = useState([])
  const [coffee, setCoffee] = useState([])
  const [nonCoffe, setNonCoffee] = useState([])
  const [food, setFood] = useState([])
  const renderItem = ({item})=>(
    <Item title={item.title} actMenu={actMenu} setActMenu={setActMenu}/>
  )
  const renderProduct = ({item})=>(
    <Product name={item.name} pictures={item.pictures} price={item.price} id={item.id} navigation={navigation}/>
  )

  useEffect(()=>{
    const favProduct = async ()=>{
      try {
        const result = await getFavProduct()
        setFavProduct(result.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    const categoryProduct = async (idCategory)=>{
      try {
        const coffeeProduct = await getCategoryProduct(idCategory)
        
        if(idCategory === 1){
          setFood(coffeeProduct.data.data)
        }
        if(idCategory === 2){
          setCoffee(coffeeProduct.data.data)
        }
        if(idCategory === 3){
          setNonCoffee(coffeeProduct.data.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    favProduct()
    categoryProduct(1)
    categoryProduct(2)
    categoryProduct(3)
  }, [])  

  return (
    <>
    <StatusBar barStyle={'light-content'}/>
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.top}>
        <Pressable onPress={()=>{
          navigation.toggleDrawer()
        }}>
          <Image source={togle} />
        </Pressable>
        <Image source={cart}/>
      </View>
      <Text onPress={()=>{
        navigation.navigate('Drawer')
      }} style={styles.topText}>A good coffee is a good day</Text>
      <View style={styles.searchColumn}>
        <Image source={seacrh} style={{marginRight : 10}}/>
        <TextInput placeholder={'Search'}></TextInput>
      </View>
      <View style={{flex : 1}}>
      <FlatList horizontal={true} data={menuBar} renderItem={renderItem}/>
      <FlatList horizontal={true} data={favProduct} renderItem={renderProduct}/>
      </View>
      <View style={{flex : 1}}>
        <View style={{display : 'flex', flexDirection : 'row', width : '90%', justifyContent : 'space-between', marginTop : 20}}>
          <Text style={styles.priceProduct}>Coffee</Text>
          <Text>See more</Text>
        </View>
      <FlatList horizontal={true} data={coffee} renderItem={renderProduct}/>
      </View>
      <View style={{flex : 1}}>
        <View style={{display : 'flex', flexDirection : 'row', width : '90%', justifyContent : 'space-between', marginTop : 20}}>
          <Text style={styles.priceProduct}>Non Coffee</Text>
          <Text>See more</Text>
        </View>
      <FlatList horizontal={true} data={nonCoffe} renderItem={renderProduct}/>
      </View>
      <View style={{flex : 1}}>
        <View style={{display : 'flex', flexDirection : 'row', width : '90%', justifyContent : 'space-between', marginTop : 20}}>
          <Text style={styles.priceProduct}>Food</Text>
          <Text>See more</Text>
        </View>
      <FlatList horizontal={true} data={food} renderItem={renderProduct}/>
      </View>
      </ScrollView>
    </View>
    </>
  )
}

export default Homepage