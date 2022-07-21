import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        padding : 30,
        width : '100%',
        height : '100%',
        paddingRight : 20,
        paddingBottom : 10
    },
    top : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        width : '62%',
        flexDirection : 'row'
    },
    textTop : {fontSize : 18, fontWeight : '700', color : '#000000'},
    card : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        backgroundColor : '#FFFFFF',
        padding : 12,
        width : '100%',
        borderRadius : 20,
        marginTop : 30,
        flexDirection : 'row'
    },
    checkout : {
        position : 'absolute',
        bottom : 50,
        left : 35,
        backgroundColor : '#895537',
        padding : 22,
        borderRadius : 20,
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    titleText : {
        fontSize : 34, 
        fontWeight : '900',
        color : '#000000',
        marginBottom : 35,
        marginTop : 35
    }, 
    cardAdress : {
        display : 'flex', 
        backgroundColor : '#FFFFFF',
        padding : 30,
        borderRadius : 20,
        marginTop : 14
    },
    input :{
        width : '100%',
        borderBottomWidth : 1, borderBottomColor : '#666'
    },
    payment :{
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        padding : 20,
        width : '100%',
        backgroundColor : '#895537',
        borderRadius : 20,
        marginTop : 20
    },
    checkBullet : {
        width : 15,
        height : 15, 
        borderRadius :50,
        borderWidth : 1, 
        borderColor : '#666'
    },
    checkBulletAct : {
        width : 15,
        height : 15, 
        borderRadius :50,
        borderWidth : 1, 
        borderColor : '#666',
        backgroundColor : '#895537'
    },
    counter : {
        display:'flex', 
        flexDirection : 'row', 
        justifyContent:'space-between', 
        width : '40%',
        backgroundColor : '#6A4029',
        padding : 10,
        borderRadius : 10
    },
    textConter : {
        color : '#FFFFFF',
        fontSize : 24,
        fontWeight : '700',
    },
    cardPayment : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'flex-start',
        backgroundColor : '#FFFFFF',
        padding : 12,
        width : '100%',
        borderRadius : 20,
        marginTop : 30,
    },
    paymentMethod : {
        height : 15,
        width : 15,
        borderRadius : 50,
        borderWidth : 2,
        borderColor : '#666666',
        backgroundColor : '#C4C4C4',
        marginRight : 20,
    },
    paymentMethodAct : {
        height : 15,
        width : 15,
        borderRadius : 50,
        borderWidth : 2,
        borderColor : '#000000',
        backgroundColor : '#895537',
        marginRight : 20,
    },
    singlePayment : {
        display : 'flex', 
        flexDirection : 'row', 
        alignItems : 'center', 
        borderBottomColor : '#666666', 
        borderBottomWidth : 0.5, 
        padding : 10,
        width : '100%'
    },
    btn : {
        backgroundColor : '#6A4029',
        width : '100%'
    }
})

export default styles