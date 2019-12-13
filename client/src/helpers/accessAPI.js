import axios from "axios";

const API_URL = "http://localhost:3001/";
export const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});
