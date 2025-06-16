import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginService = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error('Informe os campos obrigatórios!');
    }

    const response = await api.post('/user/login', { email, password });
    const { token } = response.data  

    await AsyncStorage.setItem('token', token);

    return token;

  } catch (error) {
    let errorMessage = 'Falha no login';
    
    if (error.response) {
      errorMessage = error.response.data?.message || error.response.statusText;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    throw new Error(errorMessage);
  }
};

export const registerService = async (name, email, password) => {
  try {
    if (!name || !email || !password) {
      throw new Error('Preencha todos os campos!');
    }

    const response = await api.post('/user/register', { name, email, password });
    const { token } = response.data;

    return token;
  } catch (error) {
    let errorMessage = 'Falha no cadastro';
    
    if (error.response) {
      errorMessage = error.response.data?.message || error.response.statusText;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    throw new Error(errorMessage);
  }
};