import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from "./styles";
import { themas } from "../../global/themes";

export default function User() {
    const navigation = useNavigation();
    const route = useRoute();
    
    const userData = { 
        name: 'Usuário', 
        email: 'email@exemplo.com' 
    };

    const handleLogout = () => {
        Alert.alert(
            "Sair da conta",
            "Deseja realmente sair da sua conta?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { 
                    text: "Sim", 
                    onPress: () => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Login" }]
                        });
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.iconContainer}>
                    <Text style={styles.iconText}>
                        {userData.name.charAt(0).toUpperCase()}
                    </Text>
                </View>
                
                <Text style={styles.nameText}>{userData.name}</Text>
                <Text style={styles.emailText}>{userData.email}</Text>
            </View>

            <TouchableOpacity 
                style={styles.logoutButton}
                onPress={handleLogout}
            >
                <Text style={styles.logoutText}>Sair da conta</Text>
                <MaterialIcons
                    name="logout"
                    size={20}
                    color={themas.colors.secundary}
                />
            </TouchableOpacity>
        </View>
    );
}