import axios from "axios";

const API = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8000"
});

export default API;
