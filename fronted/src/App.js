import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignInSignUp from './components/SignInSignUp';
import Management from './components/Management';
import './App.css'; 
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInSignUp />} />
          <Route path="/Management" element={<Management />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
