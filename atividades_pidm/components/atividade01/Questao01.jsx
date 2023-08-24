import {View, Text, Image, StyleSheet, Button} from "react-native"
import React, { useState } from 'react';

const Questao01 = () => {

    const [image, setImage] = useState('https://miro.medium.com/v2/resize:fit:256/1*KYjNNhBfXS4auLYu9UOOtQ.jpeg');

    const trocaImagem = () => {
        if (image === 'https://miro.medium.com/v2/resize:fit:256/1*KYjNNhBfXS4auLYu9UOOtQ.jpeg') {
          setImage('https://i.pinimg.com/originals/37/cb/e0/37cbe07b2362239d8a0814988c0a4749.jpg');
        } else if (image === 'https://i.pinimg.com/originals/37/cb/e0/37cbe07b2362239d8a0814988c0a4749.jpg') {
            setImage('https://miro.medium.com/v2/resize:fit:256/1*KYjNNhBfXS4auLYu9UOOtQ.jpeg');
        }
      };

    return (
        <View style={estilos.container}>

            <Image
                source={{uri:image}}
                style={{width:250,height:300}}
            /> 

            <View style={{ marginTop: 20 }}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>
                    Diego de Sousa Moreira
                </Text>
                <Text style={{fontSize:15, color:"red"}}>
                    Senador Pompeu - CE
                </Text>
                <Text style={{fontSize:15}}>
                    Design Digital - 8° Semestre
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Button title="Trocar Imagem" onPress={trocaImagem} />
            </View>
        </View>
    )}

    const estilos = StyleSheet.create({
        container: {
            backgroundColor: '#C0C0C0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
      });

export default Questao01;