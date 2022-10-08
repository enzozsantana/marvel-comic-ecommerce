import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "md5";

const baseURL = "http://gateway.marvel.com/v1/public/comics?";

const publicKey = "fd8dfc22061455948a86060ada9816c5";
const privateKey = "93a9bc2c32e1e4eb4d24a4afd92975df4afb3d07";
const timeStamp = Date.now().toString();

const hash = md5(timeStamp + privateKey + publicKey);

const Api = () => {
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
      .then((response) => setComicsList(response.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(comicsList);

  return <div>teste</div>;
};

export default Api;
