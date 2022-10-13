import styled from "styled-components";

export const Cart = styled.div`
  background color: #f2f2f2;
  width: 100%;
  height: auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.4rem;
`;

export const Title = styled.h1`
  color: #101010;
  align-self: flex-start;
  margin-left: 2rem;
  font-weight: 300;

  
`;

export const CartBanner = styled.img`
  width: 100%;
  height: 131px;

  @media only screen and (min-width: 768px) {
    height: 273px;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .5rem;
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 16px;
  }
`;

export const CartItems = styled.ul`
  align-self: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin: 0;
  padding: 1.5rem;
  margin-top: 1rem;

  @media only screen and (min-width: 1200px) {
   width: 80%; 
  }
`;

export const CartItem = styled.li`
  list-style: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 11.25rem;
  width: 100%;
  border-radius: 0.5rem;

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  @media only screen and (min-width: 1200px) {
    witdh: 100%;
  }
`;

export const ProductImage = styled.img`
  align-self: center;
  witdh: 100px;
  height: 150px;
  margin: 0.5rem;
`;

export const ProductInfosWrapper = styled.div`
  color: #101010;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1rem;
  width: 150px;
`;

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 1rem 0 0;
`;

export const ProductPrice = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  color: #f02d34;
  margin-bottom: 0.2rem;
`;

export const ProductInfos = styled.div`
  display: flex;
  align-items: center;
  justifify-content: space-between;
  gap: 1rem;
`;

export const Icon = styled.button`
  border: none;
  display: inline-block;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ProductAmountWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 0.3rem;
`;

export const ProductAmount = styled.div`
  font-size: 1.5rem;
  font-wight: 300;
`;

export const DeleteIcon = styled.button`
  border: none;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;

  &hover {
    color: #f02d34;
  }

  @media only screen and (min-width: 1200px) {
    position: relative;
    top: -.5rem;
    left: 7.6rem;
  }
`;

export const HorizontalRow = styled.span`
  align-self: center;
  width: 90%;
  border: 0.5px solid #bbb8;
`;

export const CoupounsAndTotalWrapper = styled.div`
  align-self: flex-start;
  margin: 1.5rem 0 2.5rem 0;
  width 90vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: .5rem;

  display: flex;
  flex-direction: column;

  
  @media only screen and (min-width: 768px) {
    width: 100%;
    margin: 2.6rem 0 0 0;
  }
`;

export const CouponTitle = styled.h2`
  font-weight: 300;
  margin-left: 1.5rem;
`;

export const CouponRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 0.6rem;

  @media only screen and (min-width: 768px) {
    gap: 0.1rem;
  }
`;

export const CouponInput = styled.input`
  width: 62vw;
  height: 2rem;
  margin: 0.7rem;
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: #dbdbdb;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 768px) {
    margin-right: 0.1rem;
    width: 75%;
  }
`;

export const CouponAddButton = styled.button`
  border: none;
  font-size: 2em;
  margin-top: 0.4rem;
  margin-left: 0.5rem;

  @media only screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

export const Totals = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
`;

export const TotalsInfos = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 1rem 1.5rem;
`;

export const CouponDiscountValue = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 1rem 1.5rem;
  color: #4444ee;
`;

export const BuyButton = styled.button`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #101010;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  width: 80%;
  height: 2.2rem;
  margin: 2rem auto;
`;
