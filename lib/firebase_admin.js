export const admin = require("firebase-admin");

const serviceAccount = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEYS
);

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
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

        // Change Text Function
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

export const adminDB = admin.firestore();
