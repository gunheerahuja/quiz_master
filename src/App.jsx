// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import TestPage from './components/TestPage';
import MeetingPage from './components/MeetingPage';
import ExpertDashboard from './components/ExpertDashboard';
import CreateInterview from './components/CreateInterview';
import ReportPage from './components/ReportPage';
import ThankYouPage from './components/ThankYouPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/meeting" element={<MeetingPage />} />
        <Route path="/expert-dashboard" element={<ExpertDashboard />} />
        <Route path="/create-interview" element={<CreateInterview />} />
        <Route path="/report/:id" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
