import axios from "axios";

// if push please change to server comment other
const API_URL = "http://52.76.198.78:3002/";

// localStorage
// const API_URL = "http://localhost:3001/";

export const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});
