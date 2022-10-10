import React from "react";
import { Wrapper } from "./styles";

import Head from "next/head";
import Header from "../Header";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Marvel HQ's Ecommerce` : "Marvel HQ's Ecommerce"}
        </title>
        <meta name="description" content="Marvel HQ's Ecommerce Website" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200;300;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <header>
          <Header />
        </header>

        <main>
            {children}
        </main>

        <footer>footer</footer>
      </Wrapper>
    </>
  );
};

export default Layout;
