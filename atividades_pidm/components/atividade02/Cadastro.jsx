import {View,Text, Button, TextInput} from "react-native"
import myStyle from "./MyStyle"
import { useState } from "react"

const Cadastro = ({navigation}) => {

    const [nome,setNome] = useState("")
    const [idade,setIdade] = useState("")
    const [email,setEmail] = useState("")
    
        return (
            <View style={myStyle.container}>
                <Text style={myStyle.header}>Cadastro</Text>
                    <TextInput
                        style={myStyle.input}
                        defaultValue={nome}
                        onChangeText={
                            (textoDigitado) => setNome(textoDigitado)
                        }
                        placeholder="Nome"
                    />
                    <TextInput
                        style={myStyle.input}
                        defaultValue={idade}
                        onChangeText={
                            (textoDigitado) => setIdade(textoDigitado)
                        }
                        placeholder="Idade"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={myStyle.input}
                        defaultValue={email}
                        onChangeText={
                            (textoDigitado) => setEmail(textoDigitado)
                        }
                        placeholder="Email"
                    />
                <View style={myStyle.button}>
                    <Button title="Ok" onPress={() => navigation.navigate("Perfil")}/>
                </View>
            </View>
        )
    }

export default Cadastro