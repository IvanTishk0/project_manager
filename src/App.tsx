import { useState } from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.css'
import HelloPage from "./pages/helloPage.tsx";

function App() {

  return (
    <div className="App">
        <HelloPage/>
    </div>
  );
}

export default App
