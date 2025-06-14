import api from './api'; // Importe sua instância do axios
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