import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title : {
        fontSize : 34,
        fontWeight : '900',
        color : '#000000',
        marginTop : 40
    },
    topCard : {
        marginTop : 30,
        display : 'flex',
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between',
        marginBottom : 10
    },
    topText : {
        fontSize : 18,
        fontWeight : '700',
        color : '#000000'
    },
    cardProfile : {
        backgroundColor : '#FFFFFF',
        padding : 20,
        borderRadius : 10,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row'
    },
    cardView :{
        borderRadius : 10,
        padding : 20,
        backgroundColor : '#FFFFFF',
        display : 'flex',
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between',
        marginTop : 24,
        marginBottom : 10,
        alignItems : 'center'
    },
    line : {
        borderBottomWidth : 1,
        borderBottomColor : '#000000'
    },
    btn : {
        backgroundColor : '#6A4029',
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 20,
        marginTop : 20,
        marginBottom : 20,
        padding : 20
    },
    imgProfile : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        width : '40%'
    },
    btnImage : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center', 
        padding :12, 
        borderRadius : 10, 
        backgroundColor : '#FFA32B',
        marginTop : 10, 
        width : '100%'
    }
})

export default styles