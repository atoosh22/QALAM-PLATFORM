import React from 'react'
import CourseCard from './CourseCard'
import CourseList from '../CourseList'

const Courses = ({isHome}) => {
  return (
 <section className="bg-gray-200">
    <h1 className="text-5xl text-center font-bold text-indigo-700 p-10 mt-12" >  {isHome? "Recent Courses" :"All Courses"}</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 mx-10 mt-12 gap-6">
 
  
  {CourseList.map((course) => (
  <CourseCard course={course} />
))}

   
      
    </div>
  </section>


  )
}

export default Courses
