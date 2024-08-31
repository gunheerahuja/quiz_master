// src/components/CreateInterview.js
import React from 'react';


function CreateInterview() {
  return (
    <div className="create-interview"
    style={{
      backgroundColor: 'white',
    }}>
      <h1>Create Interview</h1>
      <form>
        <label style={{
          color: 'white',
          }} htmlFor="title">Interview Title</label>
        <input style={{
          backgroundColor: 'grey',
          }}type="text" id="title" name="title" required />

        <label style={{
          color: 'white',
          }} htmlFor="description">Description</label>
        <textarea style={{
          backgroundColor: 'grey',
          }} id="description" name="description" rows="5" required></textarea>

        <label style={{
          color: 'white',
          }} htmlFor="date">Date</label>
        <input style={{
          backgroundColor: 'grey',
          }}type="date" id="date" name="date" required />

        <label style={{
          color: 'white',
          }} htmlFor="time">Time</label>
        <input style={{
          backgroundColor: 'grey',
          }}type="time" id="time" name="time" required />

        <button type="submit">Create Interview</button>
      </form>
    </div>
  );
}

export default CreateInterview;
