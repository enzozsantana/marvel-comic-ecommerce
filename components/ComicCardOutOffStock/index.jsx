import React from "react";
import Link from "next/link";
import {
  ProductAdd,
  ProductCard,
  ProductImage,
  ProductName,
  ProductInfos,
} from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

const ComicCard = ({ comic }) => {
  const { addProductToCart } = useCart();

  function handleAddCart() {
    // addProductToCart({ ...comic, amount: 1 });
  }

  return (
    <>
      <ProductCard>
        <Link href={`/comic/${comic.id}`}>
          <a>
            <ProductImage
              src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          </a>
        </Link>
        <ProductInfos>
          {comic.title.length >= 40 ? (
            <ProductName>{comic.title.substr(0, 40)}...</ProductName>
          ) : (
            <ProductName>{comic.title}</ProductName>
          )}
          {console.log(comic)}
          <ProductAdd onClick={handleAddCart}>Out of stock</ProductAdd>
        </ProductInfos>
      </ProductCard>
    </>
  );
};
export default ComicCard;
