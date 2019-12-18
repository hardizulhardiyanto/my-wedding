import axios from "axios";

const API_URL = "http://52.76.198.78:3001/";
export const request = axios.create({
  baseURL: API_URL,
  timeout: 1000
});
