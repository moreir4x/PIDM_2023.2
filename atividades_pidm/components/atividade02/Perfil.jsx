import {View,Text, Button, Image} from "react-native"
import myStyle from "./MyStyle"

const imagem = {
    uri:"https://olhardigital.com.br/wp-content/uploads/2017/06/20170609141843.jpg",
    width:400,
    height:254
}

const Perfil = ({navigation}) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Perfil</Text>
            <View style={myStyle.button}>
                <Image source={imagem}/>
            </View>
            
            <Text style={myStyle.text}>Nome: Diego </Text>
            <Text style={myStyle.text}>Idade: 21 </Text>
            <Text style={myStyle.text}>Curso: DD </Text>

            <View style={myStyle.button}>
                <Button title="Home" onPress={() => navigation.navigate("Home")}/>
            </View>
        </View>
    )
    }

export default Perfil

