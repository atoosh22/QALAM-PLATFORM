import React from 'react'
import { Link } from 'react-router-dom'
import { RiCodeFill } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";

const CourseDetails = () => {
  return (
    <>
      {/* Back to home */}
      <div className="flex pt-20 items-center pl-4 text-orange-500 space-x-1">
        <Link to="/">
        <IoArrowBack />
        </Link>
        <Link to="/CoursesPage">
          <h2>BLinkck To Courses</h2>
        </Link>
      </div>

      {/* Main section */}
      <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 mx-4 md:mx-8 justify-center">
        
        {/* Section one */}
        <div className="bg-gray-50 shadow-lg rounded p-3">
          <span className="pl-5 text-gray-600">Front-End</span>
          <h1 className="pl-5 text-2xl font-semibold">HTML AND CSS</h1>

          <div className="flex items-center text-orange-500 p-6">
            <RiCodeFill />
            <h3 className="ml-2">HTML & CSS</h3>
          </div>

          {/* Course description */}
          <div className="bg-white shadow-lg pt-10">
            <h2 className="font-bold pl-5 pt-3">Course Description</h2>
            <p className="p-5 font-semibold italic">
              In this course, you will learn the fundamentals of web development using HTML and CSS.
              You’ll discover how to structure web pages with HTML elements, add text, images, and links,
              and then style them beautifully using CSS. By the end, you’ll be able to build professional
              and responsive websites from scratch.
            </p>
            <Link to="#" className="text-indigo-500 pl-6">
              Duration: 3 months
            </Link>
          </div>
        </div>

        {/* Section two */}
        <div className="bg-white shadow-lg p-4">
          <h1 className="font-bold text-center bg-orange-200 mb-6 p-2">
            Instructor Info
          </h1>

          <span className="p-5 text-indigo-700 italic">
            Mohamed Abdulaahi
          </span>

          <p className="p-4">
            Mohamed Abdulaahi is an experienced web developer and educator with Link strong background in
            HTML, CSS, and modern web design techniques. He is passionate about teaching beginners and
            helping them build practical skills.
          </p>

          {/* Contact form */}
          <div className="max-w-md bg-white shadow-lg p-6 rounded-lg mx-auto">
            <h2 className="text-center font-bold text-2xl mb-4">
              Contact Email
            </h2>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-gray-300 p-2 rounded-md outline-none
              focus:ring-2 focus:ring-blue-400 invalid:bg-red-100 valid:bg-green-100 transition-all"
              required
            />

            <input
              type="tel"
              placeholder="Enter your phone"
              className="w-full border-2 border-gray-300 p-2 rounded-md outline-none
              focus:ring-2 focus:ring-blue-400 mt-4"
            />
          </div>

          {/* Manage courses */}
          <div className="text-2xl text-center font-bold mt-8">
            <h2 className="p-4 select-none">Manage Courses</h2>
            <div className="flex gap-8 items-center justify-center">
              <Link
                to="/EditCourse"
                className="bg-indigo-500 text-white rounded px-3 py-1 hover:bg-indigo-300"
              >
                Edit Course
              </Link>
              <Link
                to="#"
                className="bg-red-400 hover:bg-red-200 text-white rounded px-3 py-1"
              >
                Delete Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetails
