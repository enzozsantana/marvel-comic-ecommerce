import React from "react";
import {
  ProductAdd,
  ProductCard,
  ProductImage,
  ProductInfos,
  ProductName,
  ProductPrice,
} from "./styles";

const ComicCard = ({ comic }) => {
  return (
    <>
      {comic.prices[0].price !== 0 ? (
        <ProductCard>
          <ProductImage>
            <img
              src={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`}
              alt={comic.title}
              width="100%"
            />
          </ProductImage>
          <ProductInfos>
            <ProductName>{comic.title}</ProductName>
            <ProductPrice>${comic.prices[0].price.toFixed(2)}</ProductPrice>
          </ProductInfos>
          <ProductAdd>Add to Cart</ProductAdd>
        </ProductCard>
      ) : (
        ""
      )}
    </>
  );
};

export default ComicCard;
