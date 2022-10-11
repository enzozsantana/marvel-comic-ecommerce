import React, { useEffect, useState, useContext } from "react";
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
import { CartContext} from "../../contexts/CartContext"

export default function ComicDetailsPage() {
  const { state, dispatch } = useContext(CartContext);

  const { selectAComic } = useComic();

  const [comic, setComic] = useState();

  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    setComic(() => selectAComic(Number(id)));
  });

  function addToCartHandler(){
    const existItem = state.cart.cartItems.find((x) => x.id === comic.id)
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...comic, quantity}})};
    
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
            <ProductAdd onClick={_ => addToCartHandler()}>
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
