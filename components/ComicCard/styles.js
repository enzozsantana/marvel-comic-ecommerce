import styled from "styled-components";

export const ProductCard = styled.div`
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
  color: #222;
  background-color: #f2f2f2;
  margin: 0 0.25rem;
  border: transparent;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  background-color: #ebebeb;
  transform: scale(1, 1);
  transition: transform 0.5s ease-in-out;

  display: flex;
  flex: 1;
`;

export const ProductInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  padding: 0.5rem;
`;

export const ProductName = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0.125rem;
`;

export const ProductPrice = styled.p`
  font-weight: 500;
  margin: 0.375rem;
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
  padding: 0.5rem;
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
`;
