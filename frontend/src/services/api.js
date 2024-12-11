import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/tasks';

export const fetchTasks = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(API_BASE_URL, task);
  return response.data;
};
