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
// Task Manager App

// Select elements
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const filter = document.getElementById("filter");

// Load tasks from local storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach(task => createTaskElement(task));
}

// Save tasks to local storage
function saveTasks() {
  const tasks = [...document.querySelectorAll(".task")].map(task => ({
      id: task.dataset.id,
      text: task.querySelector(".task-text").textContent,
      completed: task.classList.contains("completed")
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create task element
function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = "task";
  li.dataset.id = task.id;
  if (task.completed) li.classList.add("completed");
  
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = task.text;
  li.appendChild(span);
  
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => editTask(li);
  li.appendChild(editBtn);
  
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => deleteTask(li);
  li.appendChild(delBtn);
  
  li.addEventListener("click", () => toggleComplete(li));
  taskList.appendChild(li);
}

// Add task
addTaskBtn.addEventListener("click", () => {
  if (!taskInput.value.trim()) return;
  const newTask = {
      id: Date.now().toString(),
      text: taskInput.value,
      completed: false
  };
  createTaskElement(newTask);
  saveTasks();
  taskInput.value = "";
});

// Edit task
function editTask(task) {
  const newText = prompt("Edit task:", task.querySelector(".task-text").textContent);
  if (newText) {
      task.querySelector(".task-text").textContent = newText;
      saveTasks();
  }
}

// Delete task
function deleteTask(task) {
  task.remove();
  saveTasks();
}

// Toggle completion
function toggleComplete(task) {
  task.classList.toggle("completed");
  saveTasks();
}

// Filter tasks
filter.addEventListener("change", () => {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach(task => {
      if (filter.value === "all") task.style.display = "";
      else if (filter.value === "completed" && !task.classList.contains("completed")) task.style.display = "none";
      else if (filter.value === "pending" && task.classList.contains("completed")) task.style.display = "none";
      else task.style.display = "";
  });
});

export const useAuth = () => useContext(AuthContext);
