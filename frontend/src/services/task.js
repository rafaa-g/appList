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
    const response = await api.post('/tasks', task, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Erro ao criar tarefa');
  }
};

export const updateTaskService = async (id, task) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await api.put(`/tasks/${id}`, task, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Erro ao atualizar tarefa');
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

const handleServiceError = (error, defaultMessage) => {
  let errorMessage = defaultMessage;
  if (error.response) {
    errorMessage = error.response.data?.message || error.response.statusText;
  } else if (error.message) {
    errorMessage = error.message;
  }
  throw new Error(errorMessage);
};