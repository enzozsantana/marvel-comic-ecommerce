import React from "react";
import GlobalStyle from "../styles/global";
import { ComicProvider } from "../contexts/ComicContext";
import { CartProvider } from "../contexts/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <CartProvider>
          <ComicProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </ComicProvider>
        </CartProvider>
    </>
  );
}

export default MyApp;
