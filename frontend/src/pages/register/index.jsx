import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from "./styles";
import checkLogo from '../../assets/checkLogo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleRegister() {
    try {
        if (!name || !email || !password) {
            return Alert.alert('Atenção', 'Preencha todos os campos!');
        }

        navigation.reset({ 
            routes: [{ 
                name: "BottomRoutes", 
                params: { 
                    user: {name, email} 
                } 
            }] 
        });
        
    } catch (error) {
        console.log(error);
        Alert.alert('Erro', 'Não foi possível realizar o cadastro');
    }
}

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image 
                    source={checkLogo} 
                    style={styles.checkLogo}
                    resizeMode="contain"
                />
                <Text style={styles.text}>Crie sua conta</Text>
            </View>    
            <View style={styles.boxMid}>
                <Text style={styles.titleInput}>NOME COMPLETO</Text>
                <View style={styles.boxInput}>
                   <TextInput 
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor={themas.colors.gray}
                    />
                    <MaterialIcons
                        name='person'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                
                <Text style={styles.titleInput}>ENDEREÇO EMAIL</Text>
                <View style={styles.boxInput}>
                   <TextInput 
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholderTextColor={themas.colors.gray}
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                
                <Text style={styles.titleInput}>SENHA</Text>
                <View style={styles.boxInput}>
                   <TextInput 
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor={themas.colors.gray}
                    />
                    <MaterialIcons
                        name='lock'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={styles.boxBottom}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleRegister}
                >
                    <Text style={styles.textButton}>SALVAR</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.cancelButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.textButton}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}