import React from "react";
import Link from "next/link";
import {
  ProductAdd,
  ProductCard,
  ProductImage,
  ProductName,
  ProductInfos,
  Icon,
  RarityIcon,
} from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { TbStar } from "react-icons/tb";
import { useCart } from "../../contexts/CartContext";

const ComicCard = ({ comic }) => {
  const { addProductToCart } = useCart();

  function handleAddCart() {
    addProductToCart({ ...comic, amount: 1 });
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
          <ProductAdd onClick={handleAddCart}>
            <Icon>
              <FaCartPlus />
            </Icon>
            ${`${comic.prices[0].price.toFixed(2)}`}
            {comic.id % 3 === 0 ? (
              <RarityIcon src="/images/rarity-icon.png" />
            ) : (
              ""
            )}
          </ProductAdd>
        </ProductInfos>
      </ProductCard>
    </>
  );
};
export default ComicCard;
