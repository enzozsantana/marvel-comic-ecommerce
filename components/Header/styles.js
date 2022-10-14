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

  width:100%;
  height: 10vh;

  @media only screen and (min-width: 768px) {
    height: 8vh;
  }
`;

export const MarvelLogo = styled.img`
  width: 4.813rem;
  height: 35px;
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

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
    right: .7rem;
    top: 1.4rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
    right: .7rem;
    top: 1.4rem;
  }
`;

export const CartProductsNumber = styled.span`
  position: absolute;
  background-color: #f02d34;
  color: #f2f2f2;
  text-align: center;
  height: 1.125rem;
  width: 1.125rem;
  border-radius: 50%;
  font-wieght: 0.7rem;
  right: 1rem;

  @media only screen and (min-width: 768px) {
    width: 1.625rem;
    height: 1.625rem;
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    top: 1rem;
    right: .7rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
    width: 1.3rem;
    height: 1.3rem;
    right: .8rem;
    top: .8rem;
  }

  @media only screen and (min-width: 1480px) {
    right: .9rem;
    top: .5rem;
  }
`;
