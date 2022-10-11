import md5 from "md5";
import axios from 'axios';

export const BASE_URL = "http://gateway.marvel.com/v1/public/";


export const publicKey = "6b9454883942505c56378de8c0b4d438" 
export const privateKey = "97838ae5ad209f031a47bb198a11cb315f90d151"
//export const publicKey = "fd8dfc22061455948a86060ada9816c5"; //ENZO
//export const privateKey = "93a9bc2c32e1e4eb4d24a4afd92975df4afb3d07"; //ENZO
export const timeStamp = Date.now();

export const hash = md5(timeStamp + privateKey + publicKey);

export const MARVEL_API_KEY = `ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;