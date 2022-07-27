import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        display : 'flex', 
        flex : 1, 
        padding : 20
    }, 
    top : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'space-between', 
        width : '100%',
        flexDirection : 'row', 
        padding : 10
    }, 
    bgPencil : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center', 
        padding : 10, 
        backgroundColor : '#6A4029', 
        borderRadius : 50, 

    }, 
    productInfo : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center', 
        width : '100%'
    }, 
    productName : {
        fontSize : 24, 
        fontWeight : '700', 
        color : '#000000', 
        marginTop : 20
    }, 
    productPrice : {
        fontSize : 18, 
        fontWeight : '700', 
        color : '#6A4029', 
        marginTop : 10
    }, 
    deliveryInfo : {
        fontSize : 18, 
        fontWeight : '400', 
        color : '#000000', 
        marginTop : 10
    }, 
    btnSave : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center', 
        backgroundColor : '#6A4029', 
        width : '100%', 
        padding : 20, 
        borderRadius : 20, 
        alignContent : 'center', 
        marginTop : 30
    }, 
    btnImage : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center', 
        padding : 10, 
        backgroundColor : '#FFA32B', 
        borderRadius : 10
    }
})

export default styles