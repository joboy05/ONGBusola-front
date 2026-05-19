import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AboutPage from './AboutPage'
import TeamPage from './TeamPage'
import ResourcePage from './ResourcePage'
import ActionPage from './ActionPage'
import ActionDetailPage from './ActionDetailPage'
import ContactPage from './ContactPage'
import NewsPage from './NewsPage'
import NewsDetailPage from './NewsDetailPage'
import ScrollToTop from './ScrollToTop'
import GalleryPage from './GalleryPage'
import SupportPage from './SupportPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/ressources" element={<ResourcePage />} />
        <Route path="/actions" element={<ActionPage />} />
        <Route path="/actions/:id" element={<ActionDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/actualites/:id" element={<NewsDetailPage />} />
        <Route path="/galerie" element={<GalleryPage />} />
        <Route path="/soutenir" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
