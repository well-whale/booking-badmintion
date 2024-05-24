import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../time/TimeSlot.css"; // Import the CSS file

const generateTimeSlots = (startTime, endTime, interval) => {
  const timeSlots = [];
  let currentTime = startTime;

  while (currentTime <= endTime) {
    const hours = String(Math.floor(currentTime / 60)).padStart(2, "0");
    const minutes = String(currentTime % 60).padStart(2, "0");
    const timeString = `${hours}:${minutes}`;
    timeSlots.push({ timeString, id: currentTime });
    currentTime += interval;
  }

  return timeSlots;
};

const TimeSlots = () => {
  const [selectedArea, setSelectedArea] = useState("Area 1");
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [firstSelected, setFirstSelected] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    const startTime = 5 * 60; // 5:00 AM
    const endTime = 23 * 60; // 11:00 PM
    const interval = 30; // 1 hour interval
    setTimeSlots(generateTimeSlots(startTime, endTime, interval));
  }, []);

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const toggleTimeSlot = (id) => {
    if (firstSelected === null) {
      setFirstSelected(id);
      setSelectedTimes([id]);
    } else {
      const newSelectedTimes = [];
      const start = Math.min(firstSelected, id);
      const end = Math.max(firstSelected, id);
      for (let i = start; i <= end; i += 30) {
        newSelectedTimes.push(i);
      }
      setSelectedTimes(newSelectedTimes);
      setFirstSelected(null); // Reset firstSelected after the range is selected
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <div id="time-slots" className="times-container">
          {timeSlots.map(({ timeString, id }) => (
            <div
              key={id}
              className={`time ${selectedTimes.includes(id) ? "selected" : ""}`}
              onClick={() => toggleTimeSlot(id)}
            >
              {timeString}
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="area-selection">
          <label>Select Area:</label>
          <select onChange={handleAreaChange} value={selectedArea}>
            <option value="Area 1">Area 1</option>
            <option value="Area 2">Area 2</option>
            <option value="Area 3">Area 3</option>
          </select>
        </div>
        <div className="area-info">
          <h2>Sân Cầu Lông Kiến Thiết</h2>
          <p>Details about {selectedArea}...</p>
        </div>
        <button className="payment-button">
          <NavLink className="dropdown-item" to="/payment">
            Thanh toán
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default TimeSlots;
