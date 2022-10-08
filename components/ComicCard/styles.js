import styled from "styled-components";

export const ProductCard = styled.div`
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
  color: #222;
  background-color: #f2f2f2;
  margin: 0 .25rem;
  border: transparent;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const ProductImage = styled.div`
  background-color: #ebebeb;
  transform: scale(1, 1);
  transition: transform 0.5s ease-in-out;
`;

export const ProductInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductName = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  margin: .125rem;
`;

export const ProductPrice = styled.p`
  font-weight: 500;
  margin: .375rem;
  color: #ec1d24;
  font-size: 1rem;
`;

export const ProductAdd = styled.button`
  font-family: "Gemunu Libre", sans-serif;
  display: inline-block;
  background: rgb(147, 0, 10);
  background: linear-gradient(
    90deg,
    rgba(147, 0, 10, 1) 10%,
    rgba(236, 54, 60, 1) 100%
  );
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 1.125rem;
  padding: .5rem;
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
`;
