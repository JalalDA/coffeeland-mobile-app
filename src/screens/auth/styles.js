import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-around',
        flex : 1
    },
    textWellcome:{
        fontSize : 65,
        fontWeight : '700',
        color : '#FFFFFF',
        textAlign : 'center'
    },
    text : {
        fontSize : 17,
        fontWeight : '400',
        color : '#FFFFFF',
        textAlign : 'center'
    },
    button : {
        padding : 22,
        paddingLeft : 43,
        paddingRight : 43,
        backgroundColor : '#6A4029',
        borderRadius : 10,
        marginBottom : 10
    },
    buttonLogin : {
        padding : 22,
        paddingLeft : 100,
        paddingRight : 100,
        backgroundColor : '#FFBA33',
        borderRadius : 10,
        marginTop : 10,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    btnWrap : {
        display : "flex",
        alignItems : 'center',
        justifyContent : 'space-around',
    },
    overLay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: 10,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width : '100%'
    },
    textInput : {
        fontSize : 14,
        fontWeight : '700',
        color : '#FFFFFF',
        borderBottomWidth : 1,
        borderBottomColor : '#FFFFFF',
        width : 280
    }, 
    btn :{
        backgroundColor : '#6A4029',
        padding : 22,
        display : 'flex',
        alignItems : 'center',
        borderRadius : 10,
        marginTop : 12
    },
    btnGoogle : {
        backgroundColor : '#FFFFFF',
        padding : 22,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        marginTop : 12,
        flexDirection : 'row'
    },
    topText : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        width : 300
    }
})

export default styles