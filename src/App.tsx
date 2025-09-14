import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import SkillScreen from './pages/SkillScreen';

const App: React.FC = () => (
  <div className="App">
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
    </nav>
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/skills" element={<SkillScreen />} />
    </Routes>
  </div>
);

export default App;