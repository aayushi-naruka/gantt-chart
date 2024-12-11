import React, { useState } from 'react';
import '../App.css'
const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title, startDate, endDate);
    setTitle('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <h2 className='add-task-heading'>Add Task</h2>
      <div>
        <label className='label-width'>Title:</label>
        <input
          className='title-input'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='label-width'>Start Date:</label>
        <input
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='label-width'>End Date:</label>
        <input
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <button className='submit-button' type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
