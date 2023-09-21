import {View,Text, Button} from "react-native"
import myStyle from "./MyStyle"

const Sobre = ({navigation}) => {

    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Sobre</Text>
            <Text style={myStyle.text}>Esta é uma aplicação mobile, construída na linguaguem React Js, na disciplina 
            de Projeto de Interfaces Móveis, Lecionada pelo professor Jefferson Carvalho, da Universidade Federal 
            do Ceará - UFC. Sua função é receber dados de um usuário e calcular o seu IMC.
             </Text>
            <View style={myStyle.button}>
                <Button title="Home" onPress={() => navigation.navigate("Home")}/>
            </View>
        </View>
    )
}
export default Sobre