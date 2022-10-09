import React, { useEffect, useState } from "react";
import { baseURL, timeStamp, publicKey, hash } from "../services/api";
import Layout from "../components/Layout/Layout";
import ComicCard from "../components/ComicCard/ComicCard";
import { ComicsList, ComicsListWrapper } from "../styles/styles";
import axios from "axios";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${baseURL}/comics?&offset=${offset}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
      )
      .then((response) => setComicsList(response.data.data.results))
      .catch((err) => console.log(err));
  }, [offset]);

  return (
    <Layout>
        <ComicsList>
          {comicsList.map((comic) => (
            <ComicCard comic={comic} key={comic.id} />
          ))}
        </ComicsList>
    </Layout>
  );
}
