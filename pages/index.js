import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import md5 from "md5";
import ComicCard from "../components/ComicCard/ComicCard";

export default function Home() {
  const baseURL = "http://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic";
  const publicKey = "fd8dfc22061455948a86060ada9816c5";
  const privateKey = "93a9bc2c32e1e4eb4d24a4afd92975df4afb3d07";
  const timeStamp = Date.now().toString();
  const hash = md5(timeStamp + privateKey + publicKey);
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}&limit=${limit}&offset=${offset}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
      .then((response) => setComicsList(response.data.data.results))
      .catch((err) => console.log(err));
  }, [offset]);

  return (
    <Layout>
      {comicsList.map((comic) => (
        <ComicCard comic={comic} />
      ))}
    </Layout>
  );
}
