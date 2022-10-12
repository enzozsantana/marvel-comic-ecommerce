import styled from "styled-components";

export const Cart = styled.div`
  background color: #f2f2f2;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h1`
  color: #101010;
  align-self: flex-start;
  margin-left: 2rem;
  font-weight: 300;
`;

export const CartItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin: 0;
  padding: 1.5rem;
`;

export const CartItem = styled.li`
  list-style: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 180px;
  width: 350px;

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
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
`

export const ProductPrice = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  
  margin-bottom: .2rem;
  color: #f02d34;
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
`;

export const ProductAmountWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: .3rem;
`;

export const ProductAmount = styled.div`
  font-size: 1.5rem;
  font-wight: 300;
`;

export const DeleteIcon = styled.button`
  border: none;
  background: transparent;
  font-size: 2rem;
  position: relative;
  top: -0.5rem;
  right: -0.3rem;
`;

export const HorizontalRow = styled.div`
  align-self: center;
  width: 90%;
  border: 0.5px solid #bbb8;
`;

export const CoupounsAndTotalWrapper = styled.div`
  width 90vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  flex-direction: column;
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
`;

export const CouponInput = styled.input`
  width: 60vw;
  height: 2rem;
  margin: 0.7rem;
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: #dbdbdb;

  &:focus {
    outline: none;
  }
`;

export const CouponAddButton = styled.button`
  border: none;
  font-size: 2em;
  margin-top: 0.4rem;
`;

export const Totals = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
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
  color: #4444EE;
`;
