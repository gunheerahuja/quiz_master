// src/components/ReportPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ReportPage() {
  const { id } = useParams();
  const [report, setReport] = useState({
    videoLink: 'http://example.com/video',
    reportText: 'Sample report content.',
    approved: false,
  });

  const handleApproval = (isApproved) => {
    setReport(prevReport => ({ ...prevReport, approved: isApproved }));
  };

  return (
    <div className="report-page">
      <h1>Report for Candidate {id}</h1>
      <div className="report-content">
        <div className="video-container">
          <h2>Video</h2>
          <a href={report.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
        </div>
        <div className="report-text">
          <h2>Report</h2>
          <p>{report.reportText}</p>
        </div>
        <div className="approval-buttons">
          <button onClick={() => handleApproval(true)} className="approve-button">Approve</button>
          <button onClick={() => handleApproval(false)} className="disapprove-button">Disapprove</button>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;
