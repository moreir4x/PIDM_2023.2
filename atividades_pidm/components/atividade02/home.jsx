import {View,Text, Button} from "react-native"
import myStyle from "./MyStyle"

const Home = ({navigation}) => {

    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>ATV 0.3</Text>
            <View style={myStyle.button}>
                <Button title="Cadastro" onPress={() => navigation.navigate("Cadastro")}/>
            </View>
            <View style={myStyle.button}>
                <Button title="IMC" onPress={() => navigation.navigate("IMC")}/>
            </View>
            <View style={myStyle.button}>
                <Button title="Sobre" onPress={() => navigation.navigate("Sobre")}/>
            </View>
            
        </View>
    )
}
export default Home