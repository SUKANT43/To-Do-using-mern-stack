# MERN Stack To-Do Application

A simple **MERN Stack To-Do Application** built using **MongoDB**, **Express.js**, **React.js**, and **Node.js**. This app allows users to manage their tasks with features such as adding, deleting, and displaying tasks dynamically.

## ## **Sample images**
![image](https://github.com/user-attachments/assets/32fe260f-15d3-42ce-a1b0-2bf5b48a3f3b)



## **Frontend (React.js)**

- **User Interface**: The frontend is built with **React.js**, providing a smooth and responsive user experience. Users can easily interact with the app to manage tasks.
- **State Management**: The app uses React's `useState` and `useEffect` hooks to manage the task data and reflect changes in the UI.
- **Styling**: The UI is styled with CSS, ensuring the app is visually appealing and user-friendly.
- **API Communication**: The frontend communicates with the backend using **Axios** to send and receive data.

### Key Features:
- Add tasks to the to-do list.
- Delete tasks from the list.
- Dynamically update the list as changes are made.

## **Backend (Node.js + Express.js)**

- **Node.js** powers the backend and allows JavaScript to be used on the server side.
- **Express.js** provides a lightweight framework for handling HTTP requests and routing.
- **RESTful API** routes are used to manage task data (add, delete, get tasks).

### Key Features:
- Endpoint to get all tasks.
- Endpoint to add new tasks.
- Endpoint to delete tasks by ID.

## **Database (MongoDB + Mongoose)**

- **MongoDB** is used to store task data in a NoSQL database, allowing for flexible storage and easy retrieval of tasks.
- **Mongoose** is used to model the task data, define the schema, and perform CRUD operations on the MongoDB database.

### Key Features:
- Store tasks in MongoDB.
- Ensure data validation with Mongoose schemas.
  
---

## **Technologies Used**

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose

---

## **How It Works**

1. **Frontend** (React.js):
   - The frontend renders the to-do list and allows users to interact with the list (add and delete tasks).
   - Tasks are managed using React's `useState` and are dynamically displayed as users make changes.

2. **Backend** (Node.js + Express.js):
   - API routes handle the data logic. When a user interacts with the frontend (add or delete task), a request is sent to the backend.
   - The backend processes the request and updates the MongoDB database.

3. **Database** (MongoDB + Mongoose):
   - Task data is stored in MongoDB.
   - Mongoose models ensure structured data and handle task operations.

---

## **Features**

- **Create Tasks**: Users can add new tasks by entering text and clicking the "Add Task" button.
- **Delete Tasks**: Each task has a delete button that allows users to remove tasks from the list.
- **Data Persistence**: The tasks are saved to MongoDB and will persist even after the page is refreshed.

---


