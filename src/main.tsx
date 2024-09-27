import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import NonFuncNavbar from "./components/NonFuncNavbar.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <NonFuncNavbar></NonFuncNavbar>
      <App />
  </StrictMode>,
)
