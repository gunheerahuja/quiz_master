import React, { useState, useEffect } from 'react';
import CameraFeed from './CameraFeed';
import Mic from '../assets/images/mic.jpg';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function TestPage() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch or generate AI questions
    setQuestions(["Sample Question 1", "Sample Question 2", "Sample Question 3"]); // Replace with actual data fetching
  }, []);

  const handleSubmitClick = () => {
    navigate('/thank-you');
  };

  const [buttonStyles, setButtonStyles] = useState({
    submit: { backgroundColor: '#2c3e50' },
    reset: { backgroundColor: '#2980b9' },
    run: { backgroundColor: '#2c3e50' },
    timer: { backgroundColor: '#2c3e50' },
  });

  const handleMouseEnter = (button) => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      [button]: {
        ...prevStyles[button],
        backgroundColor: button === 'submit' ? '#0056b3' : button === 'reset' ? '#1e90ff' : '#0056b3',
        transform: 'translateY(-2px)',
      }
    }));
  };

  const handleMouseLeave = (button) => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      [button]: {
        ...prevStyles[button],
        backgroundColor: button === 'submit' ? '#2c3e50' : button === 'reset' ? '#2980b9' : '#2c3e50',
        transform: 'translateY(0)',
      }
    }));
  };

  return (
    <div className="test-container" style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: '#1e1e1e' }}>
      {/* Chatbot part */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',             
          right: '3%',           
          height: '60vh',  
          width: '36vw',
          margin: 'auto',
          backgroundColor: '#1e1e1e',
          color: 'white',
          borderRadius: '10px',
          overflowY: 'auto',
          padding: '20px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Chat messages */}
        {[{
          role: 'Agent',
          text: 'Hello candidate! How are you?',
          color: '#2c3e50'
        }, {
          role: 'Candidate',
          text: 'I am doing good. What about you?',
          color: '#2980b9'
        }, {
          role: 'Agent',
          text: 'I am doing good. Thank you.',
          color: '#2c3e50'
        }, {
          role: 'Agent',
          text: 'Are you ready to dive into the first question?',
          color: '#2c3e50'
        }, {
          role: 'Candidate',
          text: 'Yeah, sure!',
          color: '#2980b9'
        }, {
          role: 'Agent',
          text: 'Alright! Tell me about binary search.',
          color: '#2c3e50'
        }].map((message, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <button style={{
              backgroundColor: message.color,
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              marginRight: '10px',
            }}>
              {message.role}:
            </button>
            <div>{message.text}</div>
          </div>
        ))}

        {/* Input with Mic button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '10px',
          position: 'relative',
        }}>
          <input
            type="text"
            placeholder="Transcribing voice... enter if any question"
            style={{
              width: '100%',
              padding: '10px',
              paddingRight: '40px',
              borderRadius: '5px',
              border: '1px solid #bdc3c7',
              backgroundColor: '#2c3e50',
              color: 'white',
            }}
          />
          <button style={{
            position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#2980b9',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
            <img src={Mic} alt="Mic" style={{ height: '24px', width: '24px' }} />
          </button>
        </div>
      </div>

      {/* Camera Feed */}
      <div
        style={{
          position: 'absolute',
          top: '0%',
          right: '22%',
          height: '20vh', 
          width: '20vw',
          margin: 'auto',
        }}
      >
        <CameraFeed />
      </div>

      {/* Coding Area and Buttons */}
      <div
        style={{
          position: 'absolute',
          top: '0%',
          left: '0%',
          height: '100vh',
          width: '58.5vw',
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          padding: '20px',
          color: 'white',
        }}
      >
        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: '', margin: '10px' }}>
          <button
            onClick={handleSubmitClick}
            onMouseEnter={() => handleMouseEnter('submit')}
            onMouseLeave={() => handleMouseLeave('submit')}
            style={{
              backgroundColor: buttonStyles.submit.backgroundColor,
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s, transform 0.3s',
              ...buttonStyles.submit,
              marginLeft: '4%',
            }}
          >
            Submit
          </button>
          <button
            onMouseEnter={() => handleMouseEnter('reset')}
            onMouseLeave={() => handleMouseLeave('reset')}
            style={{
              backgroundColor: buttonStyles.reset.backgroundColor,
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s, transform 0.3s',
              ...buttonStyles.reset,
              marginLeft: '30%',
            }}
          >
            Reset
          </button>
          <button
            onMouseEnter={() => handleMouseEnter('run')}
            onMouseLeave={() => handleMouseLeave('run')}
            style={{
              backgroundColor: buttonStyles.run.backgroundColor,
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s, transform 0.3s',
              ...buttonStyles.run,
              marginRight: '10%',
              marginLeft:'1%'
            }}
          >
            Run
          </button>
          <button
            onMouseEnter={() => handleMouseEnter('timer')}
            onMouseLeave={() => handleMouseLeave('timer')}
            style={{
              backgroundColor: buttonStyles.timer.backgroundColor,
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s, transform 0.3s',
              ...buttonStyles.timer,
              marginLeft: '25%',
            }}
          >
            00:00
          </button>
        </div>

        {/* Coding Area */}
        <textarea
          style={{
            width: '100%',
            height: '90%',
            backgroundColor: '#2c3e50',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '16px',
          }}
          placeholder="Write your code here..."
        />
      </div>
    </div>
  );
}

export default TestPage;
