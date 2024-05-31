import axios from "axios";

const api = axios.create({
  baseURL: "https://tarefas-backend-uhpa.vercel.app/",
});

export default api;
