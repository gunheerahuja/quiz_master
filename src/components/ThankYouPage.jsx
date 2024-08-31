import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for styling

function ThankYouPage() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    // Handle feedback submission here
    setSubmitted(true);
  };

  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
        <h1>Thank You for Your Patience</h1>
        <p>Your submission has been received.</p>

        {!submitted ? (
          <form onSubmit={handleSubmitFeedback} className="feedback-form">
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="We value your feedback. Please share your thoughts here..."
              rows="5"
              className="feedback-input"
            />
            <button type="submit" className="submit-button">Submit Feedback</button>
          </form>
        ) : (
          <p>Thank you for your feedback!</p>
        )}
      </div>
    </div>
  );
}

export default ThankYouPage;