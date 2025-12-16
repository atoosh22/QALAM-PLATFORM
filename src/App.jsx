import React from 'react'
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
  </>
  )
}

export default App
