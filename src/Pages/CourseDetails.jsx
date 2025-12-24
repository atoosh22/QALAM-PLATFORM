import React from 'react'
import { Link } from 'react-router-dom'
import { RiCodeFill } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";
import { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
  const [course, setCourse] = useState({})
  const {id} = useParams()

  const navigate = useNavigate();
 

useEffect(() => {
  const fetchCourse = async () => {
    try {
      const res = await fetch(`http://localhost:8000/CourseList/${id}`)
      const data = await res.json()
      setCourse(data)
    } catch (error) {
      console.log(error)
    }
  };

  fetchCourse()
}, []);
 const handleDelete= async()=>{

  try {
      const res = await fetch(`http://localhost:8000/CourseList/${id}`,{
        method:"Delete"
      });
      navigate("/CoursesPage")
    } catch (error) {
      console.log(error)
    }
 
 }
  return (
    <>
      {/* Back to home */}
      <div className="flex pt-20 items-center pl-4 text-orange-500 space-x-1">
        <Link to="/">
        <IoArrowBack />
        </Link>
        <Link to="/CoursesPage">
          <h2>Back  To Courses</h2>
        </Link>
      </div>

      {/* Main section */}
      <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 mx-4 md:mx-8 justify-center">
        
        {/* Section one */}
        <div className="bg-gray-50 shadow-lg rounded p-3">
          <span className="pl-5 text-gray-600">{course.type}</span>
          <h1 className="pl-5 text-2xl font-semibold">{course.title}</h1>

          <div className="flex items-center text-orange-500 p-6">
            <RiCodeFill />
            <h3 className="ml-2">{course.technology}</h3>
          </div>

          {/* Course description */}
          <div className="bg-white shadow-lg pt-10">
            <h2 className="font-bold pl-5 pt-3">Course Description</h2>
            <p className="p-5 font-semibold italic">
              {course.description}
            </p>
            <Link to="#" className="text-indigo-500 pl-6">
              Duration: {course.duration}
            </Link>
          </div>
        </div>

        {/* Section two */}
        <div className="bg-white shadow-lg p-4">
          <h1 className="font-bold text-center bg-orange-200 mb-6 p-2">
            Instructor Info
          </h1>

          <span className="p-5 text-indigo-700 italic">
            {course.instructor?.name}
          </span>

          <p className="p-4">
           {course.instructor?.description}
          </p>

         {/* Contact Info */}
<div className="max-w-md bg-white shadow-lg p-6 rounded-lg mx-auto space-y-4">
  
  <div>
    <h3 className="font-semibold text-gray-700 mb-1">Contact Email</h3>
    <input
      type="email"
      value={course.instructor?.contactEmail || ""}
      readOnly
      className="w-full border-2 border-gray-300 p-2 rounded-md bg-gray-100"
    />
  </div>

  <div>
    <h3 className="font-semibold text-gray-700 mb-1">Contact Phone</h3>
    <input
      type="tel"
      value={course.instructor?.contactPhone || ""}
      readOnly
      className="w-full border-2 border-gray-300 p-2 rounded-md bg-gray-100"
    />
  </div>

</div>


          {/* Manage courses */}
          <div className="text-2xl text-center font-bold mt-8">
            <h2 className="p-4 select-none">Manage Courses</h2>
            <div className="flex gap-8 items-center justify-center">
              <Link
                to={`/EditCourse/${id}`}
                className="bg-indigo-500 text-white rounded px-3 py-1 hover:bg-indigo-300"
              >
                Edit Course
              </Link>
              <button onClick={handleDelete}
                className="bg-red-400 hover:bg-red-200 text-white rounded px-3 py-1"
              >
                Delete Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetails
