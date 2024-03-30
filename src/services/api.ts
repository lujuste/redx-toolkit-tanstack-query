import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org",
});

// Adicione um interceptor para configurar o cabeçalho de autorização antes de cada solicitação
api.interceptors.request.use(
  (config) => {
    // Adicione o cabeçalho Authorization com o token JWT aqui
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGFmZmY0NzBlM2M4YzNmMDAyMjYyODU2ZTc0NjE2MiIsInN1YiI6IjY2MDcxYmY1ZDUxOTFmMDE3ZTJmY2FjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xVVa0B_2uLBsQMhbyL-CBdY_i_ffxS1O-2YGJ2me5Oo`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
