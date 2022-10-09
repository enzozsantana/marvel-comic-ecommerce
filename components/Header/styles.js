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
  gap: .5rem;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #f2f2f2;
  font-size: 1.75rem;
`;
