import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AboutPage from './AboutPage'
import TeamPage from './TeamPage'
import ResourcePage from './ResourcePage'
import ActionPage from './ActionPage'
import ActionDetailPage from './ActionDetailPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/ONGBusola-front">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/ressources" element={<ResourcePage />} />
        <Route path="/actions" element={<ActionPage />} />
        <Route path="/actions/:id" element={<ActionDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
