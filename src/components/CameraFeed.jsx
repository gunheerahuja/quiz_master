// src/components/CameraFeed.js
import React, { useEffect, useRef } from 'react';


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
    <div className="camera-feed">
      <video ref={videoRef} autoPlay playsInline></video>
    </div>
  );
}

export default CameraFeed;
