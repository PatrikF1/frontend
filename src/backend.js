import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;

const mainURL = process.env.VUE_APP_API_URL;

const backend = axios.create({
  mainURL: 'https://backend-tup4.onrender.com' || mainURL,
  timeout: 2000, 
});

export default backend;

