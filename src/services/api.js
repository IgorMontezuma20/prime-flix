import axios from "axios";

//Base Url: https://api.themoviedb.org/3/
//Url API: /movie/now_playing?api_key=60dc3814ec88818f2a6b586ca2c952f5&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
