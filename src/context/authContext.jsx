import { auth, firebaseProvider } from "@/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, firebaseProvider);
      setUser(result.user);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, error, handleGoogleSignOut, handleGoogleSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
