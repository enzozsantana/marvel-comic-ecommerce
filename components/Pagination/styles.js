import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

export const PaginationItem = styled.li`
  margin: 0 0.4rem;
`;

export const PaginationButton = styled.button`
  background-color: #0a0f0d;
  color: #f9f9f9;
  border: 1px solid #0a0f0d;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  padding: 0.5rem 0.7rem;
  border-radius: 7px;
  font-weight: 600;
  transition: background 0.2s;
  &:hover {
    background: #f9f9f9;
    color: #0a0f0d;
  }
  &.current-page {
    background: #f9f9f9;
    color: #0a0f0d;
  }
`;
