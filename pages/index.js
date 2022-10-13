import React, { useEffect, useState } from "react";
import { ComicsList } from "../styles/styles";
import ComicCard from "../components/ComicCard";
import Layout from "../components/Layout";
import api, { MARVEL_API_KEY } from "../services/api";
// import ReactPaginate from "react-paginate";
// import Router, { withRouter } from 'next/router'
import Pagination from "../components/Pagination/index";

const limit = 20;

export default function Home({ data }) {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [requestInfo, setRequestInfo] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(
        `comics?formatType=comic&limit=${limit}&offset=${offset}&${MARVEL_API_KEY}`
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
      {isLoading ? (
        <div>Is loading...</div>
      ) : (
        <>
          <ComicsList>
            {comics.length > 0
              ? comics.map((comic) =>
                  comic.prices[0].price !== 0 &&
                  `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}` !==
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_fantastic.jpg" ? (
                    <ComicCard comic={comic} key={comic.id} />
                  ) : (
                    ""
                  )
                )
              : ""}
            {requestInfo && (
              <Pagination
                limit={limit}
                total={requestInfo.total}
                offset={offset}
                setOffset={setOffset}
              />
            )}
          </ComicsList>
        </>
      )}
    </Layout>
  );
}
