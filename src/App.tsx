import React from 'react'
import { Layout } from './components/Layout'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Projects } from './pages/Projects'


function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route element={<About />} path='/' />
          <Route element={<Contacts />} path='/contacts' />
          <Route element={<Projects />} path='/projects' />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
