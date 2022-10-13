import React, { useEffect, useState } from "react";
import { ComicsList, ComicListWrapper, Banner } from "../styles/styles";
import ComicCard from "../components/ComicCard";
import Layout from "../components/Layout";
import api, { MARVEL_API_KEY } from "../services/api";
import Pagination from "../components/Pagination/index";
import Spinner from "../components/Spinner";
import ComicCardOutOffStock from "../components/ComicCardOutOffStock"

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
        `comics?formatType=comic&noVariants=true&formatType=comic&dateRange=%202010-01-01%2C2022-10-08&limit=${limit}&offset=${offset}&${MARVEL_API_KEY}`
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
        <Spinner />
      ) : (
        <>
          <Banner src="/images/banner.png" />
          <ComicsList>
            {comics.length > 0
              ? comics.map((comic) =>
                  comic.prices[0].price !== 0  ? (
                    <ComicCard comic={comic} key={comic.id} />
                  ) : (
                    <ComicCardOutOffStock comic={comic} key={comic.id} />
                  )
                )
              : ""}
          </ComicsList>
          {requestInfo && (
              <Pagination
                limit={limit}
                total={requestInfo.total}
                offset={offset}
                setOffset={setOffset}
              />
            )}
        </>
      )}
    </Layout>
  );
}