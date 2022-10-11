import styled from "styled-components";

export const ComicDetailed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  background-color: #000;
  color: #f2f2f2;
  width: 100%;
  min-height: 90vh;
`;

export const ComicImage = styled.img`
  margin: 0 1rem;
`;

export const ComicInfos = styled.div`
  width: 90%;
  margin-top: 1rem;
`;

export const ComicName = styled.h1`
  font-size: 1.9rem;
  margin: 1.5rem 1rem;
`;

export const ComicText = styled.p`
  text-align: justify;
  margin: 0 1rem;
`;

export const Creators = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem;
`;

export const ComicCreator = styled.span`
  font-weight: 300;
  margin-top: 0.5rem;
`;
export const ComicPages = styled.p`
  font-weight: 300;
  margin: 0 auto;
`;

export const ProductAdd = styled.button`
  width: 84vw;
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
  margin: 1rem;
  margin-top: 2.5rem;

  &:hover {
    transform: scale(1.1, 1.1);
    transition: transform 0.5s ease-in-out;
  }
`;
