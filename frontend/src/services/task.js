// services/task.js
import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTasksService = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await api.get('/tasks/tasks-by-userid', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Erro ao carregar tarefas');
  }
};

export const createTaskService = async (task) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await api.post('/tasks/create-task', task, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Erro ao criar tarefa');
  }
};

export const updateTaskService = async (task) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await api.put(`/tasks/update-task-by-taskid`, task, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    let errorMessage = 'Erro ao atualizar tarefa';
    
    if (error.response) {
      if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else {
        errorMessage = `Erro ${error.response.status}: ${error.response.statusText}`;
      }
    }
    
    throw new Error(errorMessage);
  }
};

export const deleteTaskService = async (id) => {
  try {
    const token = await AsyncStorage.getItem('token');
    await api.delete(`/tasks/delete-task-by-taskid/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (error) {
    handleServiceError(error, 'Erro ao excluir tarefa');
  }
};

export const completeTaskService = async (id, completed) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await api.put(
      '/tasks/complete-task-by-taskid',
      { id, completed }, // Envia ambos os valores
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data;
  } catch (error) {
    handleServiceError(error, 'Erro ao atualizar status da tarefa');
  }
};

const handleServiceError = (error, defaultMessage) => {
  let errorMessage = defaultMessage;
  if (error.response) {
    errorMessage = error.response.data?.message || error.response.statusText;
  } else if (error.message) {
    errorMessage = error.message;
  }
  throw new Error(errorMessage);
};