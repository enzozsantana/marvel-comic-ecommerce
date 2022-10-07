import React from "react";
import { Wrapper } from "./styles";

import Head from "next/head";
import Header from "../Header/Header";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Marvel HQ's Ecommerce` : "Marvel HQ's Ecommerce"}
        </title>
        <meta name="description" content="Marvel HQ's Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <header><Header></Header></header>
        <main>{children}</main>
        <footer>footer</footer>
      </Wrapper>
    </>
  );
};

export default Layout;
