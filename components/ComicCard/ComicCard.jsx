import React from "react";
import {
  ProductAdd,
  ProductCard,
  ProductImage,
  ProductInfos,
  ProductName,
  ProductPrice,
} from "./styles";

const ComicCard = () => {
  return (
    <>
      <ProductCard>
        <ProductImage>
          <img src="/images/hq1.jpg" alt="HQ1" width="100%" />
        </ProductImage>
        <ProductInfos>
          <ProductName>Avengers #63</ProductName>
          <ProductPrice>$5.00</ProductPrice>
          <ProductAdd>Add to Cart</ProductAdd>
        </ProductInfos>
      </ProductCard>

      <ProductCard>
        <ProductImage>
          <img src="/images/hq2.jpg" alt="HQ2" width="100%" />
        </ProductImage>
        <ProductInfos>
          <ProductName>Avengers #62</ProductName>
          <ProductPrice>$7.50</ProductPrice>
          <ProductAdd>Add to Cart</ProductAdd>
        </ProductInfos>
      </ProductCard>

      <ProductCard>
        <ProductImage>
          <img src="/images/hq5.jpg" alt="HQ5" width="100%" />
        </ProductImage>
        <ProductInfos>
          <ProductName>Avengers #61</ProductName>
          <ProductPrice>$10.00</ProductPrice>
          <ProductAdd>Add to Cart</ProductAdd>
        </ProductInfos>
      </ProductCard>

      <ProductCard>
        <ProductImage>
          <img src="/images/hq4.jpg" alt="HQ4" width="100%" />
        </ProductImage>
        <ProductInfos>
          <ProductName>Avengers #60</ProductName>
          <ProductPrice>$12.50</ProductPrice>
          <ProductAdd>Add to Cart</ProductAdd>
        </ProductInfos>
      </ProductCard>
    </>
  );
};

export default ComicCard;
