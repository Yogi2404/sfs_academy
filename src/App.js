import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from "./Components/Main";
import TimeTable from './Components/CommonPages/TimeTable';
import RecordedLectures from './Components/CommonPages/RecordedLectures';
import RegisterForm from './Components/User/RegisterForm';
import LoginForm from './Components/User/LoginForm';
import Course from './Components/CommonPages/Course';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/time-table" element={<TimeTable />} />
        <Route path="/recorded-lectures" element={<RecordedLectures />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;
