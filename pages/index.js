import React, { useEffect, useState } from "react";
import { BASE_URL, MARVEL_API_KEY } from "../services/api";
import Layout from "../components/Layout";
import { ComicsList } from "../styles/styles";
import ComicCard from "../components/ComicCard";
import axios from "axios";

export default function CharactersList() {
  const limit = 20;

  const [comics, setComics] = useState([]);
  const [requestInfo, setRequestInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `${BASE_URL}comics?formatType=comic&limit=${limit}&offset=${offset}&${MARVEL_API_KEY}`
      )
      .then((response) => {
        setRequestInfo(response.data.data);
        setComics(response.data.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        console.error(error);
      });
  }, [offset]);

  return (
    <Layout>
      <ComicsList>
        {comics.length > 0
          ? comics.map((comic) => (
              <ComicCard
                id={comic.id}
                title={comic.title}
                image={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
                price={`${comic.prices[0].price.toFixed(2)}`}
                key={comic.id}
              />
            ))
          : ""}
      </ComicsList>
    </Layout>
  );
}
