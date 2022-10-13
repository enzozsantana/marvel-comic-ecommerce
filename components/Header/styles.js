import styled from "styled-components";

export const Nav = styled.nav`
  background: #020111;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
`;

export const MarvelLogo = styled.img`
  width: 77px;
  height: 35px;

  @media only screen and (min-width: 768px) {
    width: 125px;
    height: 56px;
  }
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

  @media only screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    top: 1.6rem;
    right: .9rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.1rem;
    right: .7rem;
    top: .9rem;
  }
`;
