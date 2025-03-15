import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import SpreadsheetView from './components/SpreadsheetView'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/spreadsheet/:id" element={<SpreadsheetView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
