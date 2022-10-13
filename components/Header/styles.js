import styled from "styled-components";

export const Nav = styled.nav`
  background: rgb(3, 17, 83);
  background: linear-gradient(
    90deg,
    rgba(3, 17, 83, 1) 0%,
    rgba(2, 38, 116, 1) 23%,
    rgba(0, 125, 255, 1) 100%
  );
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #f2f2f2;
  font-size: 2rem;
  cursor: pointer;
`;

export const CartProductsNumber = styled.span`
  position: absolute;
  background-color: #f02d34;
  color: #f2f2f2;
  text-align: center;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  font-wieght: 0.7rem;
  right: 1rem;
`;
