import React, { useEffect, useState } from "react";
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
import { useCart } from "../../contexts/CartContext";

export default function ComicDetailsPage() {
  const { selectAComic } = useComic();
  const { addProductToCart } = useCart();
  const [comic, setComic] = useState();

  const router = useRouter();

 function handleAddCart() {
    addProductToCart({ ...comic, amount: 1 });
  }

  useEffect(() => {
    const { id } = router.query;

    setComic(() => selectAComic(Number(id)));
  },[]);

  return (
    <>
      <Layout>
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
            <ProductAdd comic={comic} onClick={handleAddCart}>
              <span>
                <FaCartPlus />
              </span>{" "}
              {`${comic.prices[0].price.toFixed(2)}`}
            </ProductAdd>
          </ComicDetailed>
        ) : (
          ""
        )}
      </Layout>
    </>
  );
}
