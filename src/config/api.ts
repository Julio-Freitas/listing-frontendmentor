import axios from 'axios';
const isProduction = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);
const API = axios.create({
  baseURL: isProduction
    ? 'https://listing-frontendmentor-julioclf31.vercel.app/api'
    : 'http://localhost:3000/api'
});

export default API;
