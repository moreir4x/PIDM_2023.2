import {View,Text, Button, TextInput} from "react-native"
import myStyle from "./MyStyle"
import { useState } from "react"

const IMC = ({navigation}) => {

    const [peso,setPeso] = useState("")
    const [altura,setAltura] = useState("")

    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>IMC</Text>
            <TextInput
                        style={myStyle.input}
                        defaultValue={peso}
                        onChangeText={
                            (textoDigitado) => setPeso(textoDigitado)
                        }
                        placeholder="Peso"
                    />
                    <TextInput
                        style={myStyle.input}
                        defaultValue={altura}
                        onChangeText={
                            (textoDigitado) => setAltura(textoDigitado)
                        }
                        placeholder="altura"
                    />
            <View style={myStyle.button}>
                <Button title="Ok" onPress={() => navigation.navigate("Resultado")}/>
            </View>
        </View>
    )
}
export default IMC
