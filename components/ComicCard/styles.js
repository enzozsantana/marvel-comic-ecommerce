import styled from "styled-components";

export const ProductCard = styled.div`
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
  color: #222;
  background-color: #f2f2f2;
  border: transparent;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin: 1rem;
  max-width: 216px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const ProductImage = styled.img`
  transform: scale(1, 1);
  transition: transform 0.5s ease-in-out;

  width: 100%;
`;

export const ProductName = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
  max-width: 216px;
  text-align: center;
`;

export const ProductAdd = styled.button`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-family: 'Gemunu Libre', sans-serif;
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
  margin-bottom: .75rem;
`;