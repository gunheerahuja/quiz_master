// src/components/ExpertDashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ExpertDashboard() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'John Doe', profile: 'Link to Profile', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', profile: 'Link to Profile', position: 'Data Scientist' }
  ]);

  return (
    <div className="expert-dashboard">
      <h1>Expert Dashboard</h1>
      <table className="candidates-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Profile</th>
            <th>Position Applied</th>
            <th>View Report</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td><a
               href={candidate.profile} target="_blank" rel="noopener noreferrer">View Profile</a></td>
              <td>{candidate.position}</td>
              <td>
                <Link to={`/report/${candidate.id}`} className="view-report-button">View Report</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create-interview" className="create-interview-button">Create Interview</Link>
    </div>
  );
}

export default ExpertDashboard;
