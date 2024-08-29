// src/components/TestPage.js
import React, { useState, useEffect } from 'react';
import CameraFeed from './CameraFeed';
import QuestionBox from './QuestionBox';



function TestPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch or generate AI questions
    setQuestions(["Sample Question 1", "Sample Question 2"]); // Replace with actual data fetching
  }, []);

  return (
    <div className="test-container">
      <h1>Online Test</h1>
      <CameraFeed />
      <QuestionBox questions={questions} />
    </div>
  );
}

export default TestPage;
