import React, { useEffect, useState } from "react";
import { BASE_URL, MARVEL_API_KEY } from "../../services/api";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import {
  ComicCreator,
  ComicDetailed,
  ComicImage,
  ComicInfos,
  ComicName,
  ComicPages,
  ComicText,
  Creators,
  ProductAdd,
} from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { useComic } from "../../contexts/ComicContext";
import Spinner from "../../components/Spinner";

export default function ComicDetailsPage() {
  const { selectAComic } = useComic();
  const [comic, setComic] = useState();

  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    setComic(() => selectAComic(id));
  }, []);
  // const router = useRouter();
  // const { id } = router.query;

  // const [isLoading, setIsLoading] = useState(false);
  // const [comicDetails, setComicDetails] = useState();

  // useEffect(() => {
  //   setIsLoading(true);

  //   axios
  //     .get(`${BASE_URL}comics/${id}?${MARVEL_API_KEY}`)
  //     .then((response) => {
  //       setComicDetails(response.data.data.results[0]);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [id]);
  return (
    <>
      {comic ? (
        <ComicDetailed key={comic.id} comic={comic}>
          <ComicName>{comic.title}</ComicName>
          <ComicImage
            src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          {comic.pageCount ? (
            <Creators>
              <ComicPages>{comic.pageCount} pages</ComicPages>
            </Creators>
          ) : (
            ""
          )}
          <ComicInfos>
            {comic.description ? (
              <ComicText>{comic.description}</ComicText>
            ) : (
              ""  
            )}
            {comic.creators.available !== 0 ? (
              <Creators>
                {comic.creators.items.map((item) => (
                  <ComicCreator>{`${item.role} - ${item.name}`}</ComicCreator>
                ))}
              </Creators>
            ) : (
              " "
            )}
          </ComicInfos>
          <ProductAdd>
            <span>
              <FaCartPlus />
            </span>{" "}
            {`${comic.prices[0].price.toFixed(2)}`}
          </ProductAdd>
        </ComicDetailed>
      ) : (
        ""
      )}
    </>
  );
}
