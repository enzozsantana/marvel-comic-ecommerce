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
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
    padding: 1.8rem;
  }

  @media only screen and (min-width: 1200px) {
    gap: 2rem;
    padding: 2.2rem;
  }
`;

export const Logo = styled.img`
    width: 4rem;
`

export const Credits = styled.p`
    color: #f2f2f2;
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 300;

    @media only screen and (min-width: 768px) {
      font-size: 1.4rem;
    }

    @media only screen and (min-width: 1200px) {
      font-size: 1.2rem;
    }
`