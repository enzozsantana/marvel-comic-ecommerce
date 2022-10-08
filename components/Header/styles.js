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

export const Button = styled.button`
  font-family: "Gemunu Libre", sans-serif;
  display: inline-block;
  padding: 0.5rem 0.5rem;
  margin: 0 0.25rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
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
    opacity: .85;
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
