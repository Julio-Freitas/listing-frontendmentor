import axios from 'axios';
const isProduction = process.env.NODE_ENV === 'production';

const API = axios.create({
  baseURL: isProduction ? '/api' : 'http://localhost:3000/api'
});

export default API;
