import axios from "axios";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const tmdb = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
  baseURL: TMDB_BASE_URL,
});
