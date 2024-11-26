// src/components/TaskManager.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editTask, setEditTask] = useState(null);

  // Fetch tasks (Read operation)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setTasks(response.data);
      })
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  // Create Task (POST operation)
  const createTask = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', newTask)
      .then(response => {
        setTasks([...tasks, response.data]);
        setNewTask({ title: '', description: '' }); // Clear form
      })
      .catch(err => console.error('Error creating task:', err));
  };

  // Update Task (PUT operation)
  const updateTask = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/posts/${editTask.id}`, editTask)
      .then(response => {
        const updatedTasks = tasks.map(task =>
          task.id === editTask.id ? response.data : task
        );
        setTasks(updatedTasks);
        setEditTask(null); // Clear edit mode
      })
      .catch(err => console.error('Error updating task:', err));
  };

  // Delete Task (DELETE operation)
  const deleteTask = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(err => console.error('Error deleting task:', err));
  };

  return (
    <div>
      <h2>Task Manager</h2>

      {/* Create Task Form */}
      <form onSubmit={editTask ? updateTask : createTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={editTask ? editTask.title : newTask.title}
          onChange={(e) => editTask ? setEditTask({ ...editTask, title: e.target.value }) : setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Task Description"
          value={editTask ? editTask.description : newTask.description}
          onChange={(e) => editTask ? setEditTask({ ...editTask, description: e.target.value }) : setNewTask({ ...newTask, description: e.target.value })}
          required
        />
        <button type="submit">{editTask ? 'Update Task' : 'Create Task'}</button>
      </form>

      {/* Task List (Read operation) */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.body}</p>
            <button onClick={() => setEditTask({ ...task, description: task.body })}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
