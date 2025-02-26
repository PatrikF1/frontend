import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;

const backend = axios.create({
  baseURL, 
  timeout: 2000, 
});

export default backend;
