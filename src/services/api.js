import axios from 'axios';

// Instância do Axios pré-configurada para TheMealDB
const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  timeout: 10000,
});

export default api;
