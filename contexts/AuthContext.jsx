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

document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
      if (taskInput.value.trim() === "") return;

      const taskItem = document.createElement("li");
      taskItem.textContent = taskInput.value;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
          taskList.removeChild(taskItem);
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      taskInput.value = "";
  });
});

export const useAuth = () => useContext(AuthContext);
