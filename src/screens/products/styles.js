import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        // display : 'flex', 
        // alignItems : 'center', 
        // justifyContent : 'center',
        width : '100%',
        padding : 20
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
        paddingLeft : 20, 
        width : '100%'
    }, 
    menuBar : {
        // display : 'flex', 
        // // alignItems : 'center', 
        // // justifyContent : 'space-evenly', 
        // flexDirection : 'row', 
        width : '100%', 
        marginTop : 20,
        marginBottom : 20, 
    }, 
    textBar : {
        fontSize : 18, 
        fontWeight : '700', 
        marginRight : 20,
        // marginBottom : 10
    }, 
    textBarAct : {
        fontSize : 18, 
        fontWeight : '700', 
        marginRight : 20, 
        color : '#6A4029',
        borderBottomWidth : 2,
        borderBottomColor : '#6A4029',
        paddingBottom : 5,
        // marginBottom : 10, 
        // marginTop : 10, 
    },
    productWrap : {
        width : 150,
        height : 150,
        backgroundColor : '#FFFFFF',
        borderRadius : 30,
        display :'flex',
        alignItems : 'center',
        justifyContent : 'flex-end',
        paddingBottom : 15,
        marginRight : 20,
        shadowOpacity : 100,
        marginTop : 50, 
        position : 'relative'
    },
    imageProduct : {
        width : 100,
        height : 100,
        borderRadius : 10,
        position : "absolute",
        top : -40,
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
    pencilBg : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center', 
        backgroundColor : '#6A4029', 
        padding : 10,
        borderRadius : 50, 
        position : 'absolute', 
        bottom : 0, 
        right : 0, 
    },
    addButton : {
        backgroundColor : '#6A4029', 
        borderRadius : 50,
        width : 30, 
        height : 30,
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center',
        position : 'absolute', 
        bottom : 20, 
        left : 20
    }, 
    sort : {
        backgroundColor : '#FFA32B', 
        padding : 15, 
        borderRadius : 10, 
        marginTop : 10,
        width : '30%'
    }
})

export default styles