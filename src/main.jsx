import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Beginning from './components/Sections/BeginningSection/Beginning.jsx';
import Past from './components/Sections/PastSection/PastSection.jsx';
import Present from './components/Sections/PresentSection/Present.jsx';
import Future from './components/Sections/FutureSection/Future.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App section={<Beginning />} />} />
      <Route path="/past" element={<App section={ <Past />}/>} />
      <Route path="/present" element={<App section={<Present />}/>} />
      <Route path="/future" element={<App section={<Future />}/>} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
);
