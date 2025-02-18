import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Beginning from './components/BeginningSection/Beginning.jsx'
import Past from './components/PastSection/PastSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App section={<Beginning />} />} />
      <Route path="/past" element={<App section={ <Past />}/>} />
      <Route path="/present" element={<App section={<></>}/>} />
      <Route path="/future" element={<App section={<></>}/>} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
