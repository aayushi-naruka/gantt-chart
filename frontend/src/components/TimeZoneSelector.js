import React from 'react';
import '../App.css'
const TimeZoneSelector = ({ timeZone, setTimeZone }) => {
  return (
    <div className='timezone-selector'>
        <div className='timezone-container'>
      <label>Time Zone :</label>
      <select className='timezone-select' onChange={(e) => setTimeZone(e.target.value)} value={timeZone}>
        <option value="Asia/Kolkata">Asia/Kolkata</option>
        <option value="America/New_York">America/New_York</option>
        <option value="Europe/London">Europe/London</option>
        <option value="Australia/Sydney">Australia/Sydney</option>
      </select>
    </div>
    </div>
  );
};

export default TimeZoneSelector;
