import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";

import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const userFavorites = (await getDoc(doc(db, "users", user.uid))).get(
            "favorites"
          );

          setFavorites(userFavorites);
        } catch (error) {
          console.log("error");
        }
      } else {
        setFavorites([]);
      }
    };
    fetchFavorites();
  }, [user]);

  const addFavorite = async (id) => {
    if (user) {
      try {
        setFavorites((prev) => [...prev, id]);
        // Fetch current favorites from Firestore
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          await setDoc(docRef, {
            favorites: [id],
          });

          return;
        }
        const userSnapshot = await getDoc(docRef);
        const favorites = userSnapshot.get("favorites") || [];
        // Check if the movie is already in the favorites list
        const isAlreadyFavorite = favorites.includes(id);
        if (isAlreadyFavorite) {
          console.log("Already in Favorites");
          return;
        }
        const newFavorites = [...favorites, id];

        // Add the movie to the favorites in Firestore
        await setDoc(
          docRef,
          {
            favorites: newFavorites,
          },
          {
            merge: true,
          }
        );
      } catch (err) {
        console.error(err);
        setFavorites(favorites);
      }
    } else {
      alert("User not authenticated");
    }
  };
  const removeFavorite = async (id) => {
    if (user && id) {
      try {
        setFavorites((prev) => prev.filter((i) => i !== id));
        const docRef = doc(db, "users", user.uid);
        const filtered = favorites.filter((movieId) => movieId !== id);
        await setDoc(
          docRef,
          {
            favorites: filtered,
          },
          {
            merge: true,
          }
        );
      } catch (error) {
        setFavorites(favorites);
        console.log("error", error);
      }
    }
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
