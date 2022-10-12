import React from "react";
import Link from "next/link";
import { ProductAdd, ProductCard, ProductImage, ProductName } from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

const ComicCard = ({ comic }) => {
  const { addProductToCart } = useCart();

  function handleAddCart() {
    addProductToCart({ ...comic, amount: 1 });
    //router.push('/carrinho');
  }

  return (
    <>
      <Link
        href={`/comic/${comic.id}`}
      >
        <a>
          <ProductCard>
            <ProductImage src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`} alt={comic.title} />
          </ProductCard>
        </a>
      </Link>
      <ProductName>{comic.title}</ProductName>
      <ProductAdd  onClick={handleAddCart}>
        <span>
          <FaCartPlus />
        </span>
        ${`${comic.prices[0].price.toFixed(2)}`}
      </ProductAdd>
    </>
  );
};
export default ComicCard;