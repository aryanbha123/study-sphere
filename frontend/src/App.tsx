import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './components/shared/HomeLayout'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Join = React.lazy(() => import('./pages/VideoMeet'));
export default function App () {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route path='/' element={<Home title='StudySphere | Home' />} />
              <Route path='/about' element={<About title='StudySphere | About' />}/>
              <Route path='/contact' element={<Contact title='StudySphere | Contact' />}/>
            </Route>
            <Route path='/login' element={<>Login page</>} />
            <Route path='/signup' element={<>Sign Up Page</>} />
            <Route path='/join' element={<Join/>} />
            <Route path='/join/:id' element={<></>} />
            <Route path='/quiz/:id' element={<>Quiz will be displayed here</>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}
