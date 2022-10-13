import React, { useContext } from "react";
import { Wrapper, Logo, Credits } from "./styles";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Wrapper>
        <Logo src="/images/marvel-comics-logo.png" />
        <Credits>Data provided by Marvel. © 2014 Marvel</Credits>
      </Wrapper>
    </div>
  );
};

export default Footer;
