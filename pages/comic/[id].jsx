import React, { useEffect, useState } from "react";
import { BASE_URL, MARVEL_API_KEY } from "../../services/api";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import {
  ComicDetailed,
  ComicImage,
  ComicInfos,
  ComicName,
  ComicText,
  Creators,
} from "./styles";

export default function ComicDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(false);
  const [comicDetails, setComicDetails] = useState();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${BASE_URL}comics/${id}?${MARVEL_API_KEY}`)
      .then((response) => {
        setComicDetails(response.data.data.results[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <Layout>
        {comicDetails ? (
          <ComicDetailed>
            <ComicName>{comicDetails.title}</ComicName>
            <ComicImage
              src={`${comicDetails.thumbnail.path}/portrait_incredible.${comicDetails.thumbnail.extension}`}
              alt={comicDetails}
            />
            <ComicInfos>
              {comicDetails.description ? (
                <ComicText>{comicDetails.description}</ComicText>
              ) : (
                ""
              )}
              {comicDetails.creators.available !== 0 ? (
                <Creators>
                  {comicDetails.creators.items.map((item) => (
                    <ComicText>{`${item.role} - ${item.name}`}</ComicText>
                  ))}
                </Creators>
              ) : (
                " "
              )}
              {comicDetails.pageCount ? (
                <Creators>
                  <ComicText>{comicDetails.pageCount} pages</ComicText>
                </Creators>
              ) : (
                ""
              )}
            </ComicInfos>
          </ComicDetailed>
        ) : (
          ""
        )}
      </Layout>
    </>
  );
}
