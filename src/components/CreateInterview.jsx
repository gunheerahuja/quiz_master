// src/components/CreateInterview.js
import React from 'react';


function CreateInterview() {
  return (
    <div className="create-interview">
      <h1>Create Interview</h1>
      <form>
        <label htmlFor="title">Interview Title</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required></textarea>

        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time" required />

        <button type="submit">Create Interview</button>
      </form>
    </div>
  );
}

export default CreateInterview;
