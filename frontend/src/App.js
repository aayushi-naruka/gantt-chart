import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask } from './services/api';
import GanttChart from './components/GanttChart';
import TimeZoneSelector from './components/TimeZoneSelector';
import TaskForm from './components/TaskForm';
import moment from 'moment-timezone';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [timeZone, setTimeZone] = useState('Asia/Kolkata');

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    loadTasks();
  }, []);

  const addTask = async (title, startDate, endDate) => {
    try {
      const newTask = await createTask({
        title,
        startDate,
        endDate,
        timeZone,
      });
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const formatTasksForChart = () => {
    return tasks.map((task) => ({
      ...task,
      startDate: moment.tz(task.startDate, task.timeZone).toDate(),
      endDate: moment.tz(task.endDate, task.timeZone).toDate(),
    }));
  };

  return (
    <div className='page-container'>
      <h1><span className='gantt-heading'>Gantt Chart App</span></h1>
      <TimeZoneSelector timeZone={timeZone} setTimeZone={setTimeZone} />
      <TaskForm addTask={addTask} />
      <GanttChart tasks={formatTasksForChart()} />
    </div>
  );
};

export default App;
