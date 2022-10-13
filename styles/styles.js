import styled from "styled-components";

export const ComicListWrapper = styled.div`
  @media only screen and (min-width: 768px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
}
`
export const Banner = styled.img`
  width: 100%;
  height: 131px;

  @media only screen and (min-width: 768px) {
    height: 273px;
  }
`

export const ComicsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }
`;