import React from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
  return (
    <>
         <div className="bg-white shadow-lg rounded pt-6">
        <span className="text-gray-500 px-5">{course.title}</span>
        <h2 className="font-bold px-5">{course.type}</h2>
        <p className="px-4 py-5 mb-3 line-clamp-2 ">{course.description}</p>
        <Link to="#" className="text-indigo-500 pl-6">Duration: {course.duration}</Link>
        <div className="flex items-center text-orange-500 p-6">
          <IoCodeSlashOutline />
          <h3 className="ml-2">{course.technology}</h3>
        </div>
        <Link className="bg-indigo-700 hover:bg-indigo-500 text-white rounded text-center block py-2" 
        to={`/Courses/${course.id}`}>Read More</Link>
      </div>
    </>
  )
}

export default CourseCard
