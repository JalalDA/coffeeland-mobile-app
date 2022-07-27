import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pofileContainer : {
        display : 'flex',
        alignItems : "center",
        justifyContent : 'flex-start',
        backgroundColor: '#6A4029',
        height : 280,
        padding : 20
    },
    profileImg : {
        height : 150,
        width : 150,
        borderRadius : 75
    },
    modalView : {
        flex : 1,
        display : 'flex',
        alignItems : "center", 
        justifyContent : "center",
        padding : 20,
        borderRadius : 20
    },
    cardModal : {
        display : 'flex', 
        backgroundColor : '#FFA32B',
        padding : 50,
        borderRadius : 20,
        alignItems : 'center', 
        justifyContent : 'center',
        width : '80%'
    },
    option : {
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        width : '100%', 
        marginTop : 20
    }, 
    btnOption : {
        display : 'flex', 
        alignItems : 'center', 
        justifyContent : 'center', 
        backgroundColor : '#FFFFFF',
        padding : 10,
        paddingLeft : 20,
        paddingRight : 20,
        borderRadius : 10
    }
})

export default styles