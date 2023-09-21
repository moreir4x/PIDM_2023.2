import {View,Text, Button} from "react-native"
import myStyle from "./MyStyle"

const Resultado = ({navigation}) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Resultado</Text>
            <Text style={myStyle.text}>O seu IMC é: XXX </Text>
            <Text style={myStyle.text}>Peso Normal </Text>
            <View style={myStyle.button}>
                <Button title="Home" onPress={() => navigation.navigate("Home")}/>
            </View>
        </View>
    )
    }

export default Resultado