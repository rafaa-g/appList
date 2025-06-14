import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Alert, TextInput } from "react-native";
import { style } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { DeleteIcon } from "../../components/DeleteIcon";
import { themas } from "../../global/themes";
import { useNavigation } from '@react-navigation/native';

export default function List({ route }) {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (route.params?.newNote) {
            setData(prevData => [
                ...prevData,
                {
                    id: Date.now(), 
                    title: route.params.newNote.title,
                    description: route.params.newNote.description,
                    date: new Date().toLocaleDateString('pt-BR') 
                }
            ]);
        }
    }, [route.params?.newNote]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item => 
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [searchTerm, data]);

    const handleTaskPress = (task) => {
        navigation.navigate('Edit', { 
            task,
            onSave: (updatedTask) => {
                setData(data.map(item => 
                    item.id === updatedTask.id ? updatedTask : item
                ));
            }
        });
    };

    const handleDelete = (id) => {
        Alert.alert(
            "Confirmar exclusão",
            "Tem certeza que deseja excluir esta tarefa?",
            [
                { text: "Cancelar", style: "cancel" },
                { 
                    text: "Excluir", 
                    onPress: () => setData(data.filter(item => item.id !== id))
                }
            ]
        );
    };

    const _renderCard = (item) => {
        return (
            <View style={style.card}>
                <DeleteIcon onPress={() => handleDelete(item.id)} />
                
                <TouchableOpacity 
                    style={style.contentButton}
                    onPress={() => handleTaskPress(item)}
                >
                    <View style={style.rowCard}>
                        <View style={style.textContainer}>
                            <Text style={style.titleCard}>{item.title}</Text>
                            <Text style={style.descriptionCard}>{item.description}</Text>
                            <Text style={style.dateCard}>{item.date}</Text>
                        </View>
                        <MaterialIcons
                            name="chevron-right"
                            size={24}
                            color={themas.colors.gray}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Olá Rafael, alguma nota hoje?</Text>
                <View style={style.searchContainer}>
                    <View style={style.searchBox}>
                        <MaterialIcons
                            name="search"
                            size={20}
                            color={themas.colors.gray}
                            style={style.searchIcon}
                        />
                        <TextInput
                            style={style.searchInput}
                            value={searchTerm}
                            onChangeText={setSearchTerm}
                            placeholder="Buscar notas..."
                            placeholderTextColor={themas.colors.gray}
                        />
                    </View>
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList 
                    data={filteredData}
                    style={style.list}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => _renderCard(item)}
                    ListEmptyComponent={
                        <Text style={style.emptyText}>
                            {searchTerm ? 'Nenhum resultado encontrado' : 'Nenhuma tarefa cadastrada'}
                        </Text>
                    }
                />
            </View>
        </View>
    )
}