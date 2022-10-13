import styled from "styled-components";

export const ComicWrapper = styled.div`
  background: #000000 url(/images/fundo-quadrinhos-marvel.jpg) center center/cover no-repeat;
  color: #f2f2f2;
  width: 100%;
  height: auto;
`;

export const ComicDetailed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background: rgba(0, 0, 0, 0.86);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  width: 100%;
  height: auto;
  min-height: 84vh;
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    justify-content: center;
    gap: 2rem;
  }
`;

export const BackButton = styled.button`
  color: #f2f2f2;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  left: 5px;
  top: 10px;
`;

export const ComicImage = styled.img`
  margin: 0 1rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`;

export const ComicInfos = styled.div`
  width: 90%;
  margin-top: 1rem;
  font-weight: 300;
  text-align: center;
`;

export const ComicName = styled.h1`
  font-size: 1.9rem;
  margin: 2.5rem 1rem 1.5rem 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.1rem;
  }
`;

export const ComicRow= styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: space-between;

  margin: 1.2rem 0;
`

export const ComicText = styled.p`
  text-align: center;
  margin: 0 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ComicPages = styled.p`
  font-weight: 300;
  margin: 0 auto;
`;

export const ProductAdd = styled.button`
  width: 29vw;
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
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: transform 0.5s ease-in-out;
  }
`;