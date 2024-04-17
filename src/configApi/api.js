import axios from "axios";
export const api = axios.create({
    baseURL: 'https://movies-backend-umdg.onrender.com/api',
    // baseURL: 'http://localhost:4000/api'
});