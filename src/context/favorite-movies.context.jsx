import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
export const favoriteMoviesContext = createContext();
export const useFavoriteMovies = () => useContext(favoriteMoviesContext);
export const FavoriteMoviesProvider = ({ children }) => {
  const favoriteMoviesFromLocalStorage = JSON.parse(
    localStorage.getItem("favorite-movies") || "{}"
  );

  const [favoriteMoviesMap, setFavoriteMoviesMap] = useState(
    favoriteMoviesFromLocalStorage
  );

  useEffect(() => {
    const newMapStringified = JSON.stringify(favoriteMoviesMap);
    localStorage.setItem("favorite-movies", newMapStringified);
  }, [favoriteMoviesMap]);

  return (
    <favoriteMoviesContext.Provider
      value={[favoriteMoviesMap, setFavoriteMoviesMap]}
    >
      {children}
    </favoriteMoviesContext.Provider>
  );
};
