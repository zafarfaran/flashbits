import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Contact from './pages/Contact'
import './styles/index.css'

const rootEl = document.getElementById('root')
if (rootEl && import.meta.env.PROD) {
  rootEl.innerHTML = '<div style="padding:16px;font-family:system-ui">Loading…</div>'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
