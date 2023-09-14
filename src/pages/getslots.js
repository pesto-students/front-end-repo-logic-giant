import React, { useState, useEffect } from 'react';

const GetSlots = () => {
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        // Send a GET request to fetch available slots from the backend
        const response = await fetch('http://localhost:5000/get-slots', {
          method: 'GET',
          headers: {
            // Include JWT token for authentication
            // Authorization: `Bearer ${yourAuthToken}`,
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          setAvailableSlots(data.slots);
        } else {
          // Handle error
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAvailableSlots();
  }, []);

  return (
    <div>
      <h2>Available Slots</h2>
      <ul>
        {availableSlots.map((slot, index) => (
          <li key={index}>
            Start Time: {slot.startTime}, End Time: {slot.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetSlots;
