import React, { useState } from 'react';

const SetSlots = () => {
  const [slots, setSlots] = useState([]);

  const handleAddSlot = () => {
    // Add a new slot to the slots state
    setSlots([...slots, { startTime: '', endTime: '' }]);
  };

  const handleSlotChange = (index, key, value) => {
    // Update the slot's property (startTime or endTime) in the state
    const updatedSlots = [...slots];
    updatedSlots[index][key] = value;
    setSlots(updatedSlots);
  };

  const handleSubmit = async () => {
    try {
      // Check if there are slots to save
      if (slots.length === 0) {
        // Handle the case where no slots are provided
        return;
      }
  
      // Ensure that all slots have both startTime and endTime
      const isValidSlots = slots.every((slot) => slot.startTime && slot.endTime);
  
      if (!isValidSlots) {
        // Handle the case where some slots are missing startTime or endTime
        return;
      }
  
      // Send a POST request to save the slots in the backend
      const response = await fetch('http://localhost:5000/set-slots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include JWT token for authentication
        //   Authorization: `Bearer ${yourAuthToken}`,
        },
        body: JSON.stringify({ slots }),
      });
  
      if (response.status === 201) {
        // Slots saved successfully
        // Handle success as needed
      } else {
        // Handle error
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h2>Set Available Slots</h2>
      {slots.map((slot, index) => (
        <div key={index}>
          <input
            type="time"
            placeholder="Start Time"
            value={slot.startTime}
            onChange={(e) => handleSlotChange(index, 'startTime', e.target.value)}
          />
          <input
            type="time"
            placeholder="End Time"
            value={slot.endTime}
            onChange={(e) => handleSlotChange(index, 'endTime', e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleAddSlot}>Add Slot</button>
      <button onClick={handleSubmit}>Save Slots</button>
    </div>
  );
};

export default SetSlots;
