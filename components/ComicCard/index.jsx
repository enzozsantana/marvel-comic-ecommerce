import React from "react";
import Link from "next/link";
import { ProductAdd, ProductCard, ProductImage, ProductName } from "./styles";
import { FaCartPlus } from "react-icons/fa";

const ComicCard = ({ image, id, title, price }) => {
  return (
    <>
      <Link
        href={`/comic/${id}`}
      >
        <a>
          <ProductCard>
            <ProductImage src={image} alt={title} />
          </ProductCard>
        </a>
      </Link>
      <ProductName>{title}</ProductName>
      <ProductAdd>
        <span>
          <FaCartPlus />
        </span>
        ${price}
      </ProductAdd>
    </>
  );
};
export default ComicCard;
