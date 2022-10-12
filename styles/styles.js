import styled from "styled-components";

export const ComicsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`
export const ProductAdd = styled.button`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-family: 'Gemunu Libre', sans-serif;
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
  transform: scale(1, 1);
  transition: all 0.5s;
  cursor: pointer;
  margin-bottom: .75rem;
`;
// display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: auto;
//   grid-gap: 1.5rem;
//   margin: 1rem;