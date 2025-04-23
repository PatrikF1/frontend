import axios from "axios";

//const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:3000';


const backend = axios.create({
  baseURL: 'https://backend-tup4.onrender.com/api' || 'http://localhost:3000',
  timeout: 2000,
});

export default backend;

