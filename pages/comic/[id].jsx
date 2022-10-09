import { useRouter } from "next/router";
import axios from "axios";
import md5 from "md5";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout"

import { ComicDetails, ComicImage, ComicName, ComicText, Wrapper } from "./styles";

const ComicDetailsScreen = () => {
  const router = useRouter();
  const { id } = router.query;

  const baseURL = "http://gateway.marvel.com/v1/public/comics/";
  const publicKey = "fd8dfc22061455948a86060ada9816c5";
  const privateKey = "93a9bc2c32e1e4eb4d24a4afd92975df4afb3d07";
  const timeStamp = Date.now().toString();
  const hash = md5(timeStamp + privateKey + publicKey);
  const [comicDetails, setComicDetails] = useState('');


  useEffect(() => {
    axios
      .get(`${baseURL}${id}?&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
      .then((response) => response.data.data.results)
      .then((results) => setComicDetails(results[0]))
      .catch((err) => console.log(err));
  },[]);

  return (
    <div>
      <Layout>
        <Wrapper>
          <ComicName>{comicDetails.title}</ComicName>
          <ComicDetails>
            {comicDetails.description ? <ComicText>{comicDetails.description}</ComicText> : ''}
            {comicDetails.creators.available !== 0 ? comicDetails.creators.items.map((item => <ComicText>{`${item.role} - ${item.name}`}</ComicText>)) : ''}
            {comicDetails.pageCount? <ComicText>{comicDetails.pageCount} pages</ComicText> : ''}
          </ComicDetails>
        </Wrapper>
      </Layout>
    </div>
  );
};

export default ComicDetailsScreen;
