import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(3, 17, 83);
  background: linear-gradient(
    90deg,
    rgba(3, 17, 83, 1) 0%,
    rgba(2, 38, 116, 1) 23%,
    rgba(0, 125, 255, 1) 100%
  );
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
    width: 90px;
`

export const Credits = styled.p`
    color: #f2f2f2;
    font-size: 1.2rem;
`