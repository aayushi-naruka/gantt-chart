import React from 'react';
import { Chart } from 'react-google-charts';
import '../App.css'
const GanttChart = ({ tasks }) => {
  // Format tasks for Google Charts
  const chartData = [
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Resource' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
    ],
    ...tasks.map((task) => [
      task._id,
      task.title,
      'Resource', // Placeholder for resource
      new Date(task.startDate),
      new Date(task.endDate),
      null,
      0, // Task completion percentage (can be dynamic)
      null, // Dependencies (can be dynamic)
    ]),
  ];

  const options = {
    height: 400,
    gantt: {
      trackHeight: 30,
    },
  };

  return (
    <div>
      <h2>Gantt Chart</h2>
      <Chart
        className='chart-width'
        chartType="Gantt"
        data={chartData}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default GanttChart;
