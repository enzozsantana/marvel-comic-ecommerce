import { createContext, ReactNode, useContext, useState } from "react";
import api, { MARVEL_API_KEY } from "../services/api";
//import data from "../utils/data"; //dados mockados

const ComicContext = createContext();

export function ComicProvider({ children }) {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function loadComics(value) {
    setComics(value)

    return comics;
  }

  function updateIsLoadingState(value) {
    setIsLoading(value);
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
        updateIsLoadingState,
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