import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 p-10">
    {/* <!-- Learners Card --> */}
     <Card bg="bg-gray-100">
      <h2 class="text-4xl font-bold mb-2">For Learners</h2>
      <p class="mb-4">Browse our courses and start learning today.</p>
      <Link to="Courses" class="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition">Browse Courses</Link>
    </Card>

    {/* <!-- Instructors Card --> */}
     <Card bg="bg-indigo-100">
      <h2 class="text-4xl font-bold mb-2">Instructors</h2>
      <p class="mb-4">Share your knowledge and teach with us today.</p>
      <Link to="/AddCourses" class="bg-indigo-700 text-white px-4 py-2 rounded font-semibold hover:bg-indigo-500 transition">Add Course</Link>
      </Card>
    </div>


    </>
  )
}

export default HomeCards
