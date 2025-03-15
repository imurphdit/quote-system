import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemCreate from './components/ItemCreate.jsx'
import ItemList from './components/ItemList.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList/>} />
        <Route path="item/:id" element={<ItemCreate/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
