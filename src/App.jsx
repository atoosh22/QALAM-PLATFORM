import React from 'react'
import Hero from './Component/Hero'
import HomeCards from './Component/HomeCards'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import AddCourses from './Pages/AddCourses'

const App = () => {
  return (
  <>

  <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/Courses' element={<Courses />} />
   <Route path='/AddCourses' element={<AddCourses />} />

  </Routes>
  <Hero title="Become Full-stack Web Developer" subTitle=" Learn the skills you need to become a professional web developer."/>
  <HomeCards/>
  </>
  )
}

export default App
