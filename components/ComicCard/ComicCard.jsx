import React from "react";
import Link from "next/link";
import { ProductAdd, ProductCard, ProductImage, ProductName} from "./styles";
import { FaCartPlus} from 'react-icons/fa';

const ComicCard = ({ comic }) => {
  return (
    <>
      {comic.prices[0].price !== 0 ? (
        <>
          <Link href={`/comic/${comic.id}`}>
            <a>
              <ProductCard>
                <ProductImage
                  src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
                
              </ProductCard>
            </a>
          </Link>
            <ProductName>{comic.title}</ProductName>
            <ProductAdd><span><FaCartPlus /></span> ${comic.prices[0].price.toFixed(2)}</ProductAdd>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ComicCard;
