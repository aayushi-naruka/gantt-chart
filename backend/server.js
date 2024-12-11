const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const moment = require('moment-timezone');
const Task = require('./models/Task');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse incoming JSON requests

// MongoDB connection
mongoose.connect('mongodb+srv://gantt:gantt@cluster0.tbq3l.mongodb.net/gantt?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// API Endpoints
// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new task
app.post('/api/tasks', async (req, res) => {
  const { title, startDate, endDate, timeZone } = req.body;

  try {
    const task = new Task({
      title,
      startDate: moment.tz(startDate, timeZone).toDate(),
      endDate: moment.tz(endDate, timeZone).toDate(),
      timeZone,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
