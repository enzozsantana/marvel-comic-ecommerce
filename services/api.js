import md5 from "md5";
import axios from 'axios';

export const BASE_URL = "http://gateway.marvel.com/v1/public/";

export const publicKey = "fd8dfc22061455948a86060ada9816c5";
export const privateKey = "93a9bc2c32e1e4eb4d24a4afd92975df4afb3d07";
export const timeStamp = Date.now();

export const hash = md5(timeStamp + privateKey + publicKey);

export const MARVEL_API_KEY = `ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;