import React from 'react'
import { Layout } from './components/Layout'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Projects } from './pages/Projects'
import { WebComponents } from './pages/WebComponents'


function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route element={<About />} path='/portfolio/' />
          <Route element={<Contacts />} path='/portfolio/contacts' />
          <Route element={<Projects />} path='/portfolio/projects' />
          <Route element={<WebComponents />} path='/portfolio/projects/web_components' />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
