import React, { useEffect, useState } from "react";
import { ComicsList } from "../styles/styles";
import ComicCard from "../components/ComicCard";
import { useComic } from "../contexts/ComicContext";
import Layout from "../components/Layout";
import api, { MARVEL_API_KEY } from "../services/api";


export default function Home({ data }) {
  const { comics, loadComics, updateIsLoadingState } = useComic();

  useEffect(() => {
    loadComics(data);
    updateIsLoadingState(false);
  });

  return (
    <Layout>
      <ComicsList>
        {comics.length > 0
          ? comics.map((comic) =>
              comic.prices[0].price !== 0 && `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}` !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_fantastic.jpg' ? (
                <ComicCard comic={comic} key={comic.id} />
              ) : (
                ""
              )
            )
          : ""}
      </ComicsList>
    </Layout>
  );
}

export async function getStaticProps() {
  const limit = 100;

  const data = await api
    .get(`comics?formatType=comic&limit=${limit}&${MARVEL_API_KEY}`)
    .then((res) => {
      const data = res.data.data.results;

      return data;
    });

  return {
    props: { data },
  };
}