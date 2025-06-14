import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';
import { themas } from '../../global/themes';

export default function Edit({ route, navigation }) {
  const { task, onSave } = route.params;
  
  const getInitialDate = () => {
    if (task.date) {
      try {
        const taskDate = new Date(task.date);
        return isNaN(taskDate.getTime()) ? new Date() : taskDate;
      } catch {
        return new Date();
      }
    }
    return new Date();
  };

  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');
  const [date, setDate] = useState(getInitialDate());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos');
      return;
    }
    
    onSave({
      ...task,
      title,
      description,
      date: date.toISOString()
    });
    navigation.goBack();
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Tarefa</Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Digite o título"
          placeholderTextColor={themas.colors.gray}
        />
      </View>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={description}
          onChangeText={setDescription}
          placeholder="Digite a descrição"
          placeholderTextColor={themas.colors.gray}
          multiline
        />
      </View>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Data</Text>
        <TouchableOpacity 
          style={styles.dateInput}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateText}>
            {date.toLocaleDateString('pt-BR')}
          </Text>
          <MaterialIcons 
            name="calendar-today" 
            size={20} 
            color={themas.colors.primary} 
          />
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}