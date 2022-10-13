import styled from "styled-components";

export const ProductCard = styled.div`
  cursor: pointer;
  color: #222;
  background-color: #f2f2f2;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  margin: 2rem 1rem;
  widht: 200px;
  height: 23rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: space-around;

  filter: grayscale(100%);
`;

export const ProductImage = styled.img`
  transform: scale(1, 1);
  transition: transform 0.5s ease-in-out;
  margin-top: 2rem;

  width: 150px;
  height: 225px;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;

  width: 15.625rem;
  padding: 1rem;
`;

export const ProductName = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: uppercase;

  width: 200px;
  text-align: center;
  height: 2.9rem;
`;

export const ProductAdd = styled.button`
  width: 6.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-family: "Gemunu Libre", sans-serif;
  background: rgb(147, 0, 10);
  background: linear-gradient(
    90deg,
    rgba(147, 0, 10, 1) 10%,
    rgba(236, 54, 60, 1) 100%
  );
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #ffffff;
  text-align: center;
  font-size: 1.125rem;
  padding: 0.5rem;
  transform: scale(1, 1);
  transition: all 0.5s;
  cursor: pointer;
  margin-bottom: 0.75rem;

  align-self: center;

  user-select: none;
`;
