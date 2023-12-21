import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from "./Components/Main";
import TimeTable from './Components/CommonPages/TimeTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/time-table" element={<TimeTable />} />
      </Routes>
    </Router>
  );
}

export default App;
