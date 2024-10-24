import { API_KEY } from "./Constants/Constants";
export const original = `discover/movie?api_key=${API_KEY}&with_genres=37`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35&page=3`;
export const horrorMovies = `discover/movie?api_key=${API_KEY}&with_genres=27&page=5`;
export const toprated = `discover/movie?api_key=${API_KEY}&with_genres=35&page=5`;
