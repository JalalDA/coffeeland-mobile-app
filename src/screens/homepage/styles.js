import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20,
        paddingRight : 10
    },
    top : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%'
    },
    topText : {
        fontSize : 34,
        fontWeight : '900',
        color : '#000000',
        marginTop : 40
    },
    searchColumn : {
        borderWidth : 1,
        borderRadius : 20,
        backgroundColor : '#EFEEEE',
        marginTop : 12,
        borderColor : '#EFEEEE',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        paddingLeft : 20
    },
    menuBar : {
        marginTop : 12,
        marginRight : 20,
    },
    textMenu : {
        fontSize : 17,
        fontWeight : '400',
        color : '#9A9A9D'
    },
    textMenuAct : {
        fontSize : 17,
        fontWeight : '700',
        color : '#6A4029',
        borderBottomColor : '#6A4029',
        borderBottomWidth : 1,
        paddingBottom : 4
    },
    productWrap : {
        width : 200,
        height : 200,
        backgroundColor : '#FFFFFF',
        borderRadius : 30,
        display :'flex',
        alignItems : 'center',
        justifyContent : 'flex-end',
        paddingBottom : 15,
        marginRight : 20,
        shadowOpacity : 100,
        marginTop : 50
    },
    imageProduct : {
        width : 150,
        height : 150,
        borderRadius : 10,
        position : "absolute",
        top : -20,
        elevation : 3,
        zIndex : 99
    },
    titleProduct : {
        fontSize :22,
        fontWeight : '900',
        color : '#000000'
    },
    priceProduct :{
        fontSize : 17,
        fontWeight : '700',
        color : '#6A4029'
    },
    menuProduct : {
        fontSize : 17,
        fontWeight : '700',
        color : '#6A4029'
    }
})

export default styles