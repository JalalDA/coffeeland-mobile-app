import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        padding : 30,
        width : '100%',
        paddingBottom : 0,
    },
    top : {
        display : "flex",
        width : '100%',
        justifyContent : "space-between",
        alignItems : 'center',
        flexDirection : 'row'
    },
    imgPrduct : {
        borderRadius : 50,
    },
    productInfo : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 20
    },
    btnCart : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor:'#6A4029',
        width : '100%',
        padding : 20,
        borderRadius : 20,
        marginTop : 20,
        marginBottom : 20
    }
})

export default styles