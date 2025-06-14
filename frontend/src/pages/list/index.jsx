import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Alert, TextInput } from "react-native";
import { style } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { DeleteIcon } from "../../components/DeleteIcon";
import { themas } from "../../global/themes";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  getTasksService, 
  createTaskService, 
  updateTaskService, 
  deleteTaskService 
} from '../../services/task';

export default function List() {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Carrega tarefas ao focar na tela
  useFocusEffect(
    React.useCallback(() => {
      loadTasks();
    }, [])
  );

  const loadTasks = async () => {
    try {
      const tasksData = await getTasksService();
      setTasks(tasksData);
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTasks(filtered);
    }
  }, [searchTerm, tasks]);

  const handleTaskPress = (task) => {
    navigation.navigate('Edit', { 
      task,
      onSave: async (updatedTask) => {
        try {
          await updateTaskService(updatedTask.id, updatedTask);
          loadTasks();
        } catch (error) {
          Alert.alert('Erro', error.message);
        }
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
          onPress: async () => {
            try {
              await deleteTaskService(id);
              setTasks(tasks.filter(item => item.id !== id));
            } catch (error) {
              Alert.alert('Erro', error.message);
            }
          }
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
                            placeholder="Buscar tarefas..."
                            placeholderTextColor={themas.colors.gray}
                        />
                    </View>
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList 
                    data={filteredTasks}
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