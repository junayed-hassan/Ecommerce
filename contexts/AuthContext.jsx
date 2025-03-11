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

function changeText() {
  document.getElementById("output").innerText = "Hello, JavaScript is Awesome!";
}

// Fetch API Example
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => document.getElementById("output").innerText = data.title)
      .catch(error => console.error("Error:", error));
}

// Store Data in Local Storage
function storeData() {
  localStorage.setItem("message", "Hello from Local Storage!");
  document.getElementById("output").innerText = "Data Stored!";
}

// Retrieve Data from Local Storage
function retrieveData() {
  let storedData = localStorage.getItem("message");
  document.getElementById("output").innerText = storedData || "No Data Found!";
}

// Generate Random Hex Color
function showRandomColor() {
  let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  document.body.style.backgroundColor = color;
  document.getElementById("output").innerText = "Background Color: " + color;
}

export const useAuth = () => useContext(AuthContext);
