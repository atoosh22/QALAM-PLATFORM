import React, { useState, useEffect } from 'react'
import CourseCard from './CourseCard'

const Courses = ({ isHome }) => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const apiURL = isHome
        ? 'http://localhost:3000/CourseList?_limit=3'
        : 'http://localhost:3000/CourseList'

      try {
        const res = await fetch(apiURL)
        const data = await res.json()
        setCourses(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCourses()
  }, [isHome])

  return (
    <section className="bg-gray-200">
      <h1 className="text-5xl text-center font-bold text-indigo-700 p-10 mt-12">
        {isHome ? 'Recent Courses' : 'All Courses'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-10 mt-12 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default Courses
