import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        display : 'flex', 
        flex : 1, 
        padding : 20,
        paddingRight : 10, 
        alignItems :'center', 
        justifyContent : 'flex-start'
    }, 
    top : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'space-between', 
        width : '100%', 
        flexDirection : 'row'
    }, 
    bgtrash : {
        backgroundColor : '#6A322B', 
        padding : 10, 
        borderRadius : 50,
    }, 
    bgCamera : {
        backgroundColor : '#BABABA', 
        width : 200, 
        height : 200,
        borderRadius : 100, 
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center', 
        marginTop : 30
    }, 
    input : {
        width : '90%', 
        marginTop : 10
    }, 
    textInput : {
        borderBottomColor : '#666666', 
        borderBottomWidth : 1
    }, 
    textLabel : {
        fontSize : 20, 
        fontWeight : '700', 
        color : '#000000'
    }, 
    btnSave : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center', 
        backgroundColor : '#6A322B',
        padding : 20, 
        borderRadius : 20, 
        marginTop : 30, 
        width : '80%'
    }, 
    btnImage : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'space-between',
        flexDirection : 'row', 
        width : '80%',
        marginTop : 10
    },
    btnCamera : {
        display : 'flex', 
        backgroundColor : '#FFA32B', 
        padding : 12, 
        borderRadius : 10
    }
})

export default styles