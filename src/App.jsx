import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/NavBar'
import HomePage from './Pages/HomePage'
import CoursesPage from './Pages/CoursesPage'
import AddCourses from './Pages/AddCourses'
import EditCoursePage from './Pages/EditCoursePage'
import CourseDetails from './Pages/CourseDetails'
import NotFoundPage from './Pages/NotFoundPage'


const App = () => {
  return (
  <>
<NavBar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/CoursesPage' element={<CoursesPage/>}/>
    <Route path='/AddCourses' element={<AddCourses/>}/>
    <Route path='/EditCoursepage/:id' element={<EditCoursePage/>}/>
    <Route path='/CoursesPage/:id' element={<CourseDetails/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Routes>
  </>
  )
}

export default App
