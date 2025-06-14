import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.92:4000',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
});

export default api;