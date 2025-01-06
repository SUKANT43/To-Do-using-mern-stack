import { useEffect, useState } from "react";
import './ToDo.css'; // Correct relative path for the CSS file

export function ToDo() {
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [deleteFlag, setDeleteFlag] = useState(false);

  const URL = "http://localhost:3003";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL + '/data');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData();
  }, [deleteFlag]);

  const handleSubmit = async () => {
    if (description.trim() === "" || message.trim() === "") {
      return;
    }

    try {
      const method = editId ? "PUT" : "POST";
      const url = editId ? `${URL}/data/${editId}` : `${URL}/data`;

      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, message })
      });

      const data = await response.json();
      setTodos(method === "POST" ? [...todos, data] : todos.map(todo => todo._id === editId ? data : todo));
      setDescription('');
      setMessage('');
      setEditId(null);
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };

  const handleDelete = async (id) => {
    alert('Please refresh the page to view the changes after deleting the item.');

    try {
      const response = await fetch(URL + '/data/' + id, { method: 'DELETE' });
      if (response.ok) {
       
        setDeleteFlag(prevFlag => !prevFlag);
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find(todo => todo._id === id);
    if (todoToEdit) {
      setDescription(todoToEdit.description);
      setMessage(todoToEdit.message);
      setEditId(id);
    }
  };

  return (
    <div className="todo-container">
      <h1>To-Do Using MERN Stack</h1>
      <div className="form-container">
        <h3>{editId ? "Edit Item" : "Add Item"}</h3>
        <div className="form-inputs">
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
          <input
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
          />
          <button onClick={handleSubmit}>{editId ? "Save" : "Submit"}</button>
        </div>
      </div>
      <div className="todo-list">
        <h3>To-Do List</h3>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((el) => (
              <tr key={el._id}>
                <td>{el.description}</td>
                <td>{el.message}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(el._id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(el._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
