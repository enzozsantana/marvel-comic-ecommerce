import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #000;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0.5rem .75rem;
  margin: 0 .5rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 400;
  color: #fff;
  border: none;
  background: transparent;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 10rem;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #ec1d24;
    transition: all 0.2s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
`;
