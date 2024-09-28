import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.css'
import HelloPage from "./pages/helloPage.tsx";
import LogInPage from "./pages/logInPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import MainPage from "./pages/mainPage.tsx";

const App: React.FC = () => {
    return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<HelloPage />} />
                  <Route path="/login" element={<LogInPage />} />
                  <Route path="/registration" element={<RegistrationPage />} />
                  <Route path="/user" element={<MainPage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App
