import React, { useEffect, useState } from "react";
import { ComicsList } from "../styles/styles";
import ComicCard from "../components/ComicCard";
import { useComic } from "../contexts/ComicContext";
import Layout from "../components/Layout";

export default function CharactersList({ data }) {
  const { comics, loadComics, isLoading } = useComic();

  useEffect(() => {
    loadComics(data);
  });

  return (
    <Layout>
      <ComicsList>
        {comics.length > 0
          ? comics.map((comic) =>
              comic.prices[0].price !== 0 ? (
                <ComicCard
                  id={comic.id}
                  title={comic.title}
                  image={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
                  price={`${comic.prices[0].price.toFixed(2)}`}
                  key={comic.id}
                />
              ) : (
                ""
              )
            )
          : ""}
      </ComicsList>
    </Layout>
  );
}

