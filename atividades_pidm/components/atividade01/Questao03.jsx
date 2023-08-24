import {View,Text} from "react-native"

const Questao03 = ({cor}) => {
    return (
        <View>
            <Text style={{fontSize:20,fontWeight:"bold", color: cor}}>
                1. Programação de Interfaces WEB
            </Text>
            <Text style={{fontSize:20,fontWeight:"bold", color: cor}}>
                2. Linguagem e Marcação de Scripts
            </Text>
            <Text style={{fontSize:20,fontWeight:"bold", color: cor}}>
                3. Programação Para Design
            </Text>
            <Text style={{fontSize:20,fontWeight:"bold", color: cor}}>
                4. Fundamentos de Banco de Dados
            </Text>
        </View>
    )
}
export default Questao03