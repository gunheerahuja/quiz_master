import React, { useEffect, useRef } from 'react';
import Loader from '../assets/images/loader.jpg'; // Ensure this is your loader image path

function CameraFeed() {
  const videoRef = useRef(null);

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing webcam: ', err);
      }
    };

    getCameraStream();
    
    return () => {
      // Clean up the video stream on component unmount
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      {/* Main container for camera and loader */}
      <div 
        style={{
          display: 'flex', // Flexbox layout to arrange the camera and loader side by side
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '40vw', // Adjust width of the entire container
          height: '30vh', // Adjust height of the entire container
          position: 'relative',
          border: '1px solid #333', // Optional border around the entire container
          backgroundColor: '#1e1e1e', // Background color
          padding: '9px',
          borderRadius: '8px',
        }}
      >
        {/* Video Feed */}
        <div 
          className="camera-feed"
          style={{
            width: '45%',  // Set width for the camera feed
            height: '100%',  // Adjust height to fill container
            backgroundColor: '#2c2c2c', // Background color in case of no video
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: '100%' }}></video>
          {!videoRef.current && <span style={{ color: '#fff' }}>Camera Off</span>} {/* Placeholder text */}
        </div>

        {/* Loader animation */}
        <div 
          style={{
            width: '45%',  // Set width for the loader
            height: '100%',  // Adjust height to fill container
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black', // Background color for the loader
            overflow: 'hidden', // Prevent overflow outside the div
            position: 'relative',
          }}
        >
          <div 
            style={{
              width: '100%',  // Set to 100% to fill the container
              height: '100%',  // Set to 100% to fill the container
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <img 
              src={Loader}
              alt="Loader"
              style={{ 
                width: '100%',  // Set width to 100% of the container
                height: '100%',  // Set height to 100% of the container
                objectFit: 'cover', // This will cover the entire div without leaving empty space
                animation: 'rotateImage 3s linear infinite', // Add rotation animation
              }} 
            />
          </div>
        </div>
      </div>

      {/* Keyframe Animation */}
      <style>
        {`
          @keyframes rotateImage {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default CameraFeed;