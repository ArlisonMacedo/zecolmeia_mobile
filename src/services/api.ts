import axios from "axios";

const api = axios.create({
  //   baseURL: "http://localhost:3333",
  baseURL: "http://3.20.240.35:3333",
});

export default api;
