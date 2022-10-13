import React from "react";
import GlobalStyle from "../styles/global";
import { CartProvider } from "../contexts/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <CartProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </CartProvider>
    </>
  );
}

export default MyApp;