import React from "react";
import GlobalStyle from "../styles/global";
import { ComicProvider } from "../contexts/ComicContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ComicProvider>
          <GlobalStyle />
          <Component {...pageProps} />
      </ComicProvider>
    </>
  );
}

export default MyApp;
