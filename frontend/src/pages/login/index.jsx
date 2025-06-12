import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { style } from "./styles";
import checkLogo from '../../assets/checkLogo.png'
import {MaterialIcons, AntDesign} from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { useNavigation } from '@react-navigation/native';

export default function Login () {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    function getLogin(){
        try {
            if(!email || !password){
                return Alert.alert('Atencao','Informe os campos obrigatórios!')
            }

            navigation.reset({routes:[{name:"BottomRoutes"}]})

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                source={checkLogo} 
                style={style.checkLogo}
                resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>    
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO EMAIL</Text>
                <View style={style.boxInput}>
                   <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                   <TextInput 
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <MaterialIcons
                        name='lock'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                    <Text style={style.textButton}>ENTRAR</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={{ marginTop: 20 }}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ 
                        color: themas.colors.primary,
                        textAlign: 'center',
                        textDecorationLine: 'underline'
                    }}>
                        Ainda não tem uma conta? Registre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}