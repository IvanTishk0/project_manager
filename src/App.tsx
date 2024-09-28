import {BrowserRouter as Router, Routes, Route, useHistory} from 'react-router-dom';
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.css'
import HelloPage from "./pages/helloPage.tsx";
import LogInPage from "./pages/logInPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import MainPage from "./pages/mainPage.tsx";

const App: React.FC = () => {

    const [userData, setUserData] = useState([
        {id: 1, name: 'petya', email: 'peya@mail.ru', password: '12345'},
        {id: 2, name: 'artem', email: 'artem@mail.ru', password: '54321'},
        {id: 3, name: 'danil', email: 'danil@mail.ru', password: 'qwerety'},
        {id: 4, name: 'vanya', email: 'vanya@mail.ru', password: 'qwe123'},
    ]);

    return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<HelloPage />} />
                  <Route path="/login" element={<LogInPage value={userData} />} />
                  <Route path="/registration" element={<RegistrationPage value={userData}/>} />
                  <Route path="/user" element={<MainPage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App
