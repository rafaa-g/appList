import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { styles } from './styles';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { themas } from '../../global/themes';
import { createTaskService } from '../../services/task';

export default function NewList({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);
    
    try {
      const taskData = {
        title: title.trim(),
        description: description.trim(),
        dueDate: date.toISOString()
      };

      await createTaskService(taskData);

      navigation.navigate('List', { 
        successMessage: 'Tarefa criada com sucesso!' 
      });
      
    } catch (error) {
      Alert.alert('Erro', error.message || 'Falha ao criar tarefa');
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Nova Nota</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.titleInput}
          placeholder="Digite o título"
          value={title}
          onChangeText={setTitle}
          maxLength={50}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Descreva sua nota..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Validade</Text>
        <TouchableOpacity 
          style={styles.dateInput}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateText}>
            {date.toLocaleDateString('pt-BR')}
          </Text>
          <MaterialIcons name="calendar-today" size={20} color={themas.colors.primary} />
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
          minimumDate={new Date()}
        />
      )}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar nota</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}