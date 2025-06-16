import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';
import { themas } from '../../global/themes';
import { updateTaskService } from '../../services/task';

export default function Edit({ route, navigation }) {
  const { task } = route.params;
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const [date, setDate] = useState(getInitialDate());

  const handleSave = async () => {
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);

    try {
      const formattedDate = date.toISOString().split('T')[0];

      const updatedTaskData = {
        id: task.id,
        title: title.trim(),
        description: description.trim(),
        dueDate: formattedDate
      };

      console.log(updatedTaskData)

      await updateTaskService(updatedTaskData);

      navigation.navigate('List', { refreshed: true });
    } catch (error) {
      Alert.alert('Erro', 'Falha ao atualizar a tarefa: ' + error.message);
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
          disabled={isLoading}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.saveButton, isLoading && styles.disabledButton]}
          onPress={handleSave}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={themas.colors.white} />
          ) : (
            <Text style={styles.saveButtonText}>Salvar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}