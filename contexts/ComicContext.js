import { createContext, ReactNode, useContext, useState } from "react";
import api, { MARVEL_API_KEY } from "../services/api";

const ComicContext = createContext();

export function ComicProvider({ children }) {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  function loadComics() {
    const limit = 20;

    setIsLoading(true);

    api
    .get(
      `comics?formatType=comic&limit=${limit}&offset=${offset}&${MARVEL_API_KEY}`
    )
    .then((response) => {
      setComics(response.data.data.results);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setIsLoading(true);
    });

    return comics;
  }

  function selectAComic(id) {
    const comic = comics.find((comic) => comic.id === id);
    if (comic) return comic;
  }

  return (
    <ComicContext.Provider
      value={{
        comics,
        isLoading,
        loadComics,
        selectAComic,
      }}
    >
      {children}
    </ComicContext.Provider>
  );
}

export function useComic() {
  return useContext(ComicContext);
}
