import { StyleSheet } from "react-native"

const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    header: {
        fontWeight:"bold",
        fontSize:60,
        color:"Black",
        marginBottom:20,
    },
    input: {
        height: 40,
        width:300,
        paddingLeft: 10,
        margin:10,
        borderColor: "black",
        borderWidth: 2,
        fontSize: 16,
        fontWeight: "bold",
    },
    button: {
        margin: 5,
    },
    text: 
    {
        fontSize: 20,
        fontWeight: "bold",
        width:300,
    },
})

export default myStyle