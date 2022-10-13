import React, { useEffect, useState } from "react";
import api, { MARVEL_API_KEY } from "../../services/api";
import { useRouter } from "next/router";
import { useCart } from "../../contexts/CartContext";
import Layout from "../../components/Layout";
import { FaCartPlus } from "react-icons/fa";
import {
  ComicDetailed,
  ComicImage,
  ComicInfos,
  ComicName,
  ComicText,
  ComicRow,
  ProductAdd,
  ComicWrapper,
} from "./styles";

export default function ComicDetailsPage() {
  const { addProductToCart } = useCart();

  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(false);
  const [comicDetails, setComicDetails] = useState();

  function handleAddCart() {
    addProductToCart({ ...comicDetails, amount: 1 });
  }

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`comics/${id}?${MARVEL_API_KEY}`)
      .then((response) => {
        setComicDetails(response.data.data.results[0]);
        console.log(comicDetails);
        return comicDetails;
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <Layout>
        {comicDetails ? (
          <ComicWrapper>
            <ComicDetailed>
              <ComicName>{comicDetails.title}</ComicName>
              <ComicImage
                src={`${comicDetails.thumbnail.path}/portrait_incredible.${comicDetails.thumbnail.extension}`}
                alt={comicDetails}
              />
              <ComicInfos>
                {comicDetails.description &&
                comicDetails.description.length <= 100 ? (
                  <ComicText>{comicDetails.description}</ComicText>
                ) : (
                  <ComicText>{comicDetails.description}...</ComicText>
                )}
                <ComicRow>
                  {comicDetails.pageCount ? (
                    <ComicText>{comicDetails.pageCount} pages</ComicText>
                  ) : (
                    ""
                  )}
                  {comicDetails.dates ? <ComicText>Published: {(comicDetails.dates[0].date).substr(0, 10)} </ComicText> : ''}
                </ComicRow>
                <ComicRow>
                  {comicDetails.series.name ? <ComicText>Series: {comicDetails.series.name}</ComicText> : ''}
                </ComicRow>
              </ComicInfos>
              <ProductAdd comic={comicDetails} onClick={handleAddCart}>
                <span>
                  <FaCartPlus />
                </span>{" "}
                {`${comicDetails.prices[0].price.toFixed(2)}`}
              </ProductAdd>
            </ComicDetailed>
          </ComicWrapper>
        ) : (
          ""
        )}
      </Layout>
    </>
  );
}

// comicDetails.creators.available !== 0 ? (
//   <ComicRow>
//     {comicDetails.creators.items.map((item) => (
//       <ComicText>{`${item.role} - ${item.name}`}</ComicText>
//     ))}
//   </ComicRow>
// ) : (
//   " "
// )
