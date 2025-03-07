"use client";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading: user === undefined,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
const user = {
  name: 'Junaid',
  age: 25,
  skills: ['JavaScript', 'React', 'Node.js']
};

user.location = 'Dhaka';
user.skills.push('Next.js');

console.log(user);



export const useAuth = () => useContext(AuthContext);
