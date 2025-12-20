import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    <>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 p-10">
    {/* <!-- Learners Card --> */}
     <Card bg="bg-gray-100">
      <h2 class="text-4xl font-bold mb-2">For Learners</h2>
      <p class="mb-4">Browse our courses and start learning today.</p>
      <a href="courses.html" class="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition">Browse Courses</a>
    </Card>

    {/* <!-- Instructors Card --> */}
     <Card bg="bg-indigo-100">
      <h2 class="text-4xl font-bold mb-2">Instructors</h2>
      <p class="mb-4">Share your knowledge and teach with us today.</p>
      <a href="addcourse.html" class="bg-indigo-700 text-white px-4 py-2 rounded font-semibold hover:bg-indigo-500 transition">Add Course</a>
      </Card>
    </div>


    </>
  )
}

export default HomeCards
