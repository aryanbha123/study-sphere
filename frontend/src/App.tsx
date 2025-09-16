import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home =  React.lazy(() => import('./pages/Home'));
export default function App() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}> 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home  title='StudySphere | Home' />} />
            <Route path='/abou' element={<Home  title='StudySphere | About' />} />
            <Route path='/contact' element={<Home  title='StudySphere | Contact' />} />
            <Route path='/login' element={<></>} />
            <Route path='/signup' element={<></>} />
            <Route path='/meet/:id' element={<></>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}
